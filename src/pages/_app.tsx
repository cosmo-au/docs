import { Context, Cookies } from '@cosmo-au/design-system';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import '../../fonts.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context switchable>
      <DefaultSeo
        openGraph={{
          title: 'Cosmo Design System',
          description: 'The Cosmo Design System enforces strict component APIs and performance parameters to streamline development across projects.',
          type: 'website',
          locale: 'en_AU',
          url: 'https://design.cosmogroup.io',
          site_name: 'Cosmo Design System',
          images: [
            {
              url: 'https://cosmogroup.io/images/general/01.jpg',
              alt: 'Cosmo',
            },
          ],
        }}
        titleTemplate={'%s | Cosmo Design System'}
      />
      <Header />
      <Component {...pageProps} />
      <Cookies token='12032022' />
    </Context>
  );
}

export default MyApp;
