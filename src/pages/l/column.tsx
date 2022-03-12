import { Card, Code, Column, Element, Heading, Section } from '@cosmo-au/design-system';
import type { NextPage } from 'next';

import Layout from '../../components/Layout';

function PagesLayoutsColumn() {
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
          name: 'API Reference',
          value: '#api',
        },
      ]}
      github='https://github.com/cosmo-au/design-system/blob/main/src/components/Layout/Layout.Column.tsx'
      name='Column'
      parent='Layouts'>
      <Element bottom={10} id='start'>
        <Heading level={2}>Getting Started</Heading>
        <Heading bottom={4} level={5}>
          Import the component
        </Heading>
        <Code copy>{"import { Column } from '@cosmo-au/design-system';"}</Code>
      </Element>
      <Element bottom={10} id='basic'>
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Section align='stretch'>
              <Column width={50}>
                <Card border>
                  <Heading level={3}>Column with a width of 50</Heading>
                </Card>
              </Column>
              <Column width={50}>
                <Card border>
                  <Heading level={3}>Column also with a width of 50</Heading>
                  <Heading level={4}>Additional line for row with stretch alignment demo.</Heading>
                </Card>
              </Column>
            </Section>
          </Card>
        </Element>
        <Code copy>
          {'/* Must be wrapped in Block, and is the parent of Column */\n' +
            '<Block>\n' +
            "   <Section align='stretch'>\n" +
            '       <Column width={50}>\n' +
            '           /*...children */ \n' +
            '       </Column> \n' +
            '       <Column width={50}>\n' +
            '           /*...children */ \n' +
            '       </Column> \n' +
            '   </Section> \n' +
            '/Block>\n'}
        </Code>
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

export default PagesLayoutsColumn as NextPage;
