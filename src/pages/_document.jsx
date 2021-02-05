import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <link rel="icon" href="/icons/icon-57x57.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <meta name="theme-color" content="#189AB4" />
          <link rel="apple-touch-icon" sizes="57x57" href="/next/icons/icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/next/icons/icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/next/icons/icon-180x180.png" />
        </Head>
        <body>
          <Main />
          <div id="portal" />
          <NextScript />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID}');`,
            }}
          />
        </body>
      </html>
    );
  }
}
