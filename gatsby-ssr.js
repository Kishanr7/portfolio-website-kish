const React = require('react');

// Netlify serves .webmanifest files as application/octet-stream. Point the
// generated manifest link at the equivalent JSON file so browsers receive a
// valid JSON content type while the plugin continues to generate the icons.
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents().map(component => {
    if (component.type === 'link' && component.props.rel === 'manifest') {
      return React.cloneElement(component, { href: '/manifest.json' });
    }

    return component;
  });

  replaceHeadComponents(headComponents);
};
