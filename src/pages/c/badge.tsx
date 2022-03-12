import { Badge, Card, Code, Element, Heading } from '@cosmo-au/design-system';
import type { NextPage } from 'next';

import Layout from '../../components/Layout';

function PagesComponentsBadge() {
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
          name: 'Dot',
          value: '#dot',
        },
        {
          name: 'API Reference',
          value: '#api',
        },
      ]}
      github='https://github.com/cosmo-au/design-system/blob/main/src/components/Badge/Badge.tsx'
      name='Badge'
      parent='Components'>
      <Element bottom={10} id='start'>
        <Heading level={2}>Getting Started</Heading>
        <Heading bottom={4} level={5}>
          Import the component
        </Heading>
        <Code copy>{"import { Badge } from '@cosmo-au/design-system';"}</Code>
      </Element>
      <Element bottom={10} id='basic'>
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Badge>Basic Badge</Badge>
          </Card>
        </Element>
        <Code copy>{'<Badge >Basic Badge</Badge>'}</Code>
      </Element>
      <Element bottom={10} id='dot'>
        <Heading level={2}>Dot</Heading>
        <Element bottom={4}>
          <Card border>
            <Badge dot='pulse'>Badge with Dot</Badge>
          </Card>
        </Element>
        <Code copy>{"<Badge dot='pulse' >Badge with Dot</Badge>"}</Code>
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

export default PagesComponentsBadge as NextPage;
