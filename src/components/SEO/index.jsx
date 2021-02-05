import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function Index({ description, meta, title }) {
  const formattedTitle = `${title} — MTP`;

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={formattedTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Mai Te Pora" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      {meta.map(({ name, content }) => (
        <meta name={name} key={name} content={content} />
      ))}
    </Head>
  );
}

Index.defaultProps = {
  meta: [],
  description: `MTP is a group of developers and early supporters committed to growing the Switcheo Ecosystem`,
};

Index.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Index;
