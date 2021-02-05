import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@pagerland/themes/src/Corporate';
import {
  Navbar,
  Welcome,
  Offer,
  Goals,
  Mission,
  Cta,
  Team,
  Testimonials,
  Pricing,
  Copyright,
  Newsletter,
  Contact,
} from '@pagerland/themes/src/Corporate/containers';
import data from '@pagerland/themes/src/Corporate/data';

import preview from '@pagerland/themes/src/Corporate/assets/preview.jpg';

import SEO from '../components/SEO';

const Corporate = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.brand} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Mai Te Pora" />

    <Navbar />
    <Welcome name="" />
    <Offer name="expertise" />
    <Goals name="mission" />
    <Team name="team" />
    <Contact name="contact" />
    <Newsletter name="newsletter" />
    <Copyright />

    {/* <Pricing name="pricing" /> */}
    {/* <Testimonials name="testimonials" /> */}
    {/* <Mission name="mission" /> */}
    {/* <Cta name="cta" {...data.supportCta} /> */}
  </Theme>
);

Corporate.propTypes = {
  url: PropTypes.string,
};

Corporate.defaultProps = {
  url: '#',
};

export default Corporate;
