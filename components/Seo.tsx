import React from "react";
import Head from "next/head";
import Script from "next/script";

export const Seo = () => {
  const pageTitle = "BlogNLP";
  const pageDesc =
    "BlogNLP is a free AI blog writing tool that helps you break your writer's block to create original content in a fraction of a time. Powered by Open AI's GPT-3.";
  const canonicalUrl = "https://blognlp.com/";
  const twitterHandle = "@britoszn";

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
      <meta content="Kelvin Brito" name="author" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={pageDesc} key="desc" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} key="ogdesc" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blognlp.com/" key="ogurl" />
      <meta property="og:image" content="https://blognlp.com/main.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta name="twitter:image" content="https://blognlp.com/main.png" />
      <link rel="canonical" key="canonical" href={canonicalUrl} />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6672834098859869"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
};
