const https = require('https');
const path = require('path');

const BLOG_FEED = process.env.HASHNODE_FEED_URL || 'https://kish.hashnode.dev/rss.xml';
const VERIFIED_POSTS = [
  {
    title: 'Protecting PII data on the cloud: Deep Dive into Encryption',
    excerpt:
      'A practical AWS-focused guide to protecting sensitive data with encryption at rest and in transit.',
    url: 'https://kish.hashnode.dev/protecting-pii-data-on-the-cloud-deep-dive-into-encryption',
    publishedAt: '2025-09-02T00:00:00.000Z',
    readingTime: 19,
    tags: ['AWS', 'Encryption', 'Data security'],
  },
  {
    title: 'Essential Cloud Techniques for Protecting PII Data (Part 1)',
    excerpt:
      'A layered look at encryption, masking, privacy transformations and governance for cloud data platforms.',
    url: 'https://kish.hashnode.dev/essential-cloud-techniques-for-protecting-pii-data-part-1',
    publishedAt: '2025-07-16T00:00:00.000Z',
    readingTime: 11,
    tags: ['PII', 'Cloud security', 'Data engineering'],
  },
  {
    title: 'My Experience of Learning HTML, CSS, and JavaScript',
    excerpt:
      'Reflections on learning front-end fundamentals through interactive lessons and small practical projects.',
    url: 'https://kish.hashnode.dev/my-experience-of-learning-html-css-and-javascript',
    publishedAt: '2023-06-01T00:00:00.000Z',
    readingTime: 2,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

const requestText = (url, redirects = 0) =>
  new Promise((resolve, reject) => {
    const request = https.get(
      url,
      {
        timeout: 8000,
        headers: {
          Accept: 'application/rss+xml, application/xml;q=0.9, text/xml;q=0.8',
          'User-Agent': 'KishanRekhadiaPortfolio/1.0 (+https://kish7.netlify.app)',
        },
      },
      response => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          response.resume();
          if (redirects >= 3) {
            reject(new Error('Too many redirects while loading the Hashnode feed.'));
            return;
          }
          resolve(requestText(new URL(response.headers.location, url).toString(), redirects + 1));
          return;
        }

        if (response.statusCode !== 200) {
          response.resume();
          reject(new Error(`Hashnode feed returned HTTP ${response.statusCode}.`));
          return;
        }

        response.setEncoding('utf8');
        let body = '';
        response.on('data', chunk => {
          body += chunk;
        });
        response.on('end', () => resolve(body));
      },
    );

    request.on('timeout', () => request.destroy(new Error('Hashnode feed request timed out.')));
    request.on('error', reject);
  });

const decodeEntities = value =>
  value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '\u0022')
    .replace(/&#39;|&apos;/g, String.fromCharCode(39));

const readTag = (source, tag) => {
  const match = source.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match ? decodeEntities(match[1]).trim() : '';
};

const plainText = value =>
  decodeEntities(value)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const parseFeed = xml =>
  Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi))
    .map(match => match[1])
    .map(item => {
      const fullContent = readTag(item, 'content:encoded');
      const description = plainText(readTag(item, 'description'));
      const words = plainText(fullContent || description)
        .split(/\s+/)
        .filter(Boolean).length;
      const tags = Array.from(item.matchAll(/<category(?:\s[^>]*)?>([\s\S]*?)<\/category>/gi))
        .map(category => plainText(category[1]))
        .filter(Boolean);

      return {
        title: plainText(readTag(item, 'title')),
        excerpt: description,
        url: plainText(readTag(item, 'link')),
        publishedAt: plainText(readTag(item, 'pubDate')),
        readingTime: Math.max(1, Math.ceil(words / 225)),
        tags,
      };
    })
    .filter(post => post.title && post.url && post.publishedAt)
    .slice(0, 3);

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type HashnodePost implements Node @dontInfer {
      title: String!
      excerpt: String!
      url: String!
      publishedAt: Date! @dateformat
      readingTime: Int!
      tags: [String!]!
    }
  `);
};

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId, reporter }) => {
  let posts = VERIFIED_POSTS;

  try {
    const feedPosts = parseFeed(await requestText(BLOG_FEED));
    posts = feedPosts.length ? feedPosts : VERIFIED_POSTS;
    reporter.info(`Loaded ${posts.length} article${posts.length === 1 ? '' : 's'} from Hashnode.`);
  } catch (error) {
    reporter.warn(
      `Hashnode RSS was unavailable; using the verified article fallback. ${error.message}`,
    );
  }

  posts.forEach(post => {
    actions.createNode({
      ...post,
      id: createNodeId(`hashnode-post-${post.url}`),
      parent: null,
      children: [],
      internal: {
        type: 'HashnodePost',
        contentDigest: createContentDigest(post),
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  if (/^\/(archive|pensieve)(\/|$)/.test(page.path)) {
    actions.deletePage(page);
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /miniraf/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
