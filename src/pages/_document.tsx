import { getCssText } from '@cosmo-au/design-system';
import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />

        <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
        <link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
        <link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
        <link href='/site.webmanifest' rel='manifest' />
        <meta content='#2b5797' name='msapplication-TileColor' />
        <meta content='#ffffff' name='theme-color' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script data-code='bQR17Ng9vriQ3SlbsFkuvgNLkL0Y2fsk' defer id='pirschjs' src='https://api.pirsch.io/pirsch.js' type='text/javascript' />
      </body>
    </Html>
  );
}

Document.getInitialProps = async function getInitialProps(ctx) {
  const results = await ctx.defaultGetInitialProps(ctx);
  const stitchesCssString = getCssText();

  if (!stitchesCssString) {
    await ctx.renderPage();
  }

  return {
    ...results,
    styles: (
      <>
        {results.styles}
        <style>
          {`
            html {
              font-size: 62.5%;
              position: relative;
              height: 100%;
              margin: 0;
              padding: 0;
              border: 0;

            } 
            body {
              font-family: inherit;
              font-size: 1.6rem;
              line-height: 1.6;
              margin: 0;
              height: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }
            * {
              box-sizing: border-box;
              color: inherit;
              margin: 0 auto;
            } 

          `}
        </style>
        <style dangerouslySetInnerHTML={{ __html: stitchesCssString }} id='stitches' />
      </>
    ),
  };
};
