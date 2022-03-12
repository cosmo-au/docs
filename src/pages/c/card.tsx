import { Card, Code, Element, Heading } from '@cosmo-au/design-system';
import type { NextPage } from 'next';
import Image from 'next/image';

import Layout from '../../components/Layout';

function PagesComponentsCard() {
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
        {
          name: 'Image',
          value: '#image',
        },
        {
          name: 'API Reference',
          value: '#api',
        },
      ]}
      github='https://github.com/cosmo-au/design-system/blob/main/src/components/Card/Card.tsx'
      name='Card'
      parent='Components'>
      <Element bottom={10} id='start'>
        <Heading level={2}>Getting Started</Heading>
        <Heading bottom={4} level={5}>
          Import the component
        </Heading>
        <Code copy>{"import { Card } from '@cosmo-au/design-system';"}</Code>
      </Element>
      <Element bottom={10} id='basic'>
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Card border theme='navy'>
              Basic Card
            </Card>
          </Card>
        </Element>
        <Code copy>{"<Card border theme='navy'>Basic Card</Card>"}</Code>
      </Element>
      <Element bottom={10} id='image'>
        <Heading level={2}>Image</Heading>
        <Element bottom={4}>
          <Card border>
            <Card border image={<Image alt='' layout='fill' objectFit='cover' src='https://cosmogroup.io/images/fills/01.jpg' />} imageHeight='15rem' theme='navy'>
              Card with Image
            </Card>
          </Card>
        </Element>
        <Code copy>{"<Card border image={<Image ... />} imageHeight='15rem' theme='navy'>Card with Image</Card>"}</Code>
      </Element>
      <Element bottom={10} id='api'>
        <Heading level={2}>API Reference</Heading>
        <Element bottom={4}>
          <Card border>Todo</Card>
        </Element>
      </Element>
    </Layout>
  );
}

export default PagesComponentsCard as NextPage;
