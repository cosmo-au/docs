import { Card, Code, Element, Heading, Switch } from '@cosmo-au/design-system';
import type { NextPage } from 'next';

import Layout from '../../components/Layout';

function PagesLayoutsSwitch() {
  return (
    <Layout
      contents={[
        {
          name: 'Getting Started',
          value: '#start',
        },
        {
          name: 'Basic Usage',
          value: '#basic',
        },
      ]}
      github='https://github.com/cosmo-au/design-system/blob/main/src/components/Theme/Theme.Switch.tsx'
      name='Switch'
      parent='Layouts'>
      <Element bottom={10} id='start'>
        <Heading level={2}>Getting Started</Heading>
        <Heading bottom={4} level={5}>
          Import the component
        </Heading>
        <Code copy>{"import { Switch } from '@cosmo-au/design-system';"}</Code>
      </Element>
      <Element bottom={10} id='basic'>
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Switch />
          </Card>
        </Element>
        <Code copy>
          {"/* Add 'switchable' the theme provider <Context> */ \n" +
            '<Context switchable>\n' +
            '   <Component {...pageProps} />\n' +
            '</Context>\n' +
            '\n' +
            '/* Place <Switch> wherever you like */ \n' +
            '<Switch />'}
        </Code>
      </Element>
    </Layout>
  );
}

export default PagesLayoutsSwitch as NextPage;
