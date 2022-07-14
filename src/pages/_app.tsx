/* eslint-disable import/no-unresolved */
import { Provider } from '@withcosmo/design-system';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <DefaultSeo
        openGraph={{
          title: 'Cosmo Developers',
          description: 'The Cosmo Design System enforces strict component APIs and performance parameters to streamline development across projects.',
          type: 'website',
          locale: 'en_AU',
          url: 'https://developers.cosmogroup.io',
          site_name: 'Cosmo Developers',
          images: [
            {
              url: 'https://cosmogroup.io/images/general/01.jpg',
              alt: 'Cosmo',
            },
          ],
        }}
        titleTemplate={'%s | Cosmo Developers'}
      />

      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
