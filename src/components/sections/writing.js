import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const WritingSection = styled.section`
  .header-row {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 28px;
  }
  .header-row .text-link {
    margin-bottom: 48px;
    font-family: var(--font-mono);
    font-size: 12px;
    white-space: nowrap;
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  article {
    display: flex;
    min-height: 330px;
    flex-direction: column;
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.84);
    transition: border-color var(--transition), transform var(--transition);
  }

  article:hover {
    border-color: var(--border-strong);
    transform: translateY(-4px);
  }

  .meta {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 26px;
    color: var(--sage-400);
    font-family: var(--font-mono);
    font-size: 10px;
  }
  h3 {
    margin-bottom: 16px;
    font-size: 26px;
    line-height: 1.1;
  }
  .excerpt {
    display: -webkit-box;
    overflow: hidden;
    color: var(--sage-400);
    font-size: 16px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin: auto 0 20px;
    padding: 24px 0 0;
    list-style: none;
  }
  .tags li {
    color: var(--mint-300);
    font-family: var(--font-mono);
    font-size: 9px;
    text-transform: uppercase;
  }
  .read-link {
    color: var(--cream-100);
    font-family: var(--font-mono);
    font-size: 11px;
  }

  .fallback {
    padding: 32px;
    border: 1px dashed var(--border-strong);
    border-radius: var(--radius-md);
    color: var(--sage-400);
  }

  @media (max-width: 900px) {
    .articles {
      grid-template-columns: 1fr;
    }
    article {
      min-height: auto;
    }
  }
  @media (max-width: 620px) {
    .header-row {
      align-items: flex-start;
      flex-direction: column;
    }
    .header-row .text-link {
      margin: -18px 0 32px;
    }
  }
`;

const formatDate = value =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value));

const Writing = () => {
  const data = useStaticQuery(graphql`
    query HashnodeWriting {
      allHashnodePost(sort: { fields: publishedAt, order: DESC }, limit: 3) {
        nodes {
          title
          excerpt
          url
          publishedAt
          readingTime
          tags
        }
      }
    }
  `);
  const posts = [...data.allHashnodePost.nodes].sort(
    (left, right) => new Date(right.publishedAt) - new Date(left.publishedAt),
  );

  return (
    <WritingSection id="writing" className="section-shell" aria-labelledby="writing-title">
      <div className="container">
        <div className="header-row">
          <div className="section-heading">
            <p className="eyebrow">Writing</p>
            <h2 id="writing-title">Notes on data systems and security.</h2>
            <p>Recent articles from my Hashnode publication.</p>
          </div>
          <a
            className="text-link"
            href="https://kish.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All articles ↗
          </a>
        </div>

        {posts.length ? (
          <div className="articles">
            {posts.map(post => (
              <article key={post.url}>
                <div className="meta">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span>{post.readingTime} min read</span>
                </div>
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <ul className="tags" aria-label="Article tags">
                  {post.tags.slice(0, 3).map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a
                  className="read-link"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${post.title}`}
                >
                  Read on Hashnode ↗
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="fallback">
            <p>
              Recent articles could not be loaded during this build. The portfolio remains
              available.
            </p>
            <a
              className="text-link"
              href="https://kish.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Kishan’s blog ↗
            </a>
          </div>
        )}
      </div>
    </WritingSection>
  );
};

export default Writing;
