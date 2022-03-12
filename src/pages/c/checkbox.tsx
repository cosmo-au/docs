import { Card, Checkbox, Code, Element, Heading } from '@cosmo-au/design-system';
import type { NextPage } from 'next';

import Layout from '../../components/Layout';

function PagesComponentsCheckbox() {
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
          name: 'Tooltip',
          value: '#tooltip',
        },
        {
          name: 'API Reference',
          value: '#api',
        },
      ]}
      github='https://github.com/cosmo-au/design-system/blob/main/src/components/Input/Input.Checkbox.tsx'
      name='Checkbox'
      parent='Components'>
      <Element bottom={10} id='start'>
        <Heading level={2}>Getting Started</Heading>
        <Heading bottom={4} level={5}>
          Import the component
        </Heading>
        <Code copy>{"import { Checkbox } from '@cosmo-au/design-system';"}</Code>
      </Element>
      <Element bottom={10} id='basic'>
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Element bottom={4}>
              <Checkbox>Normal checkbox</Checkbox>
            </Element>
            <Element bottom={4}>
              <Checkbox size={2}>Small checkbox</Checkbox>
            </Element>
            <Checkbox checked>Checked checkbox</Checkbox>
          </Card>
        </Element>
        <Code copy>{'<Checkbox>Normal checkbox</Checkbox>\n <Checkbox size={2}>Small checkbox</Checkbox>\n Checkbox checked>Checked checkbox</Checkbox>'}</Code>
      </Element>
      <Element bottom={10} id='tooltip'>
        <Heading level={2}>Tooltip</Heading>
        <Element bottom={4}>
          <Card border>
            <Checkbox tooltip='more info'>Checkbox with Tooltip</Checkbox>
          </Card>
        </Element>
        <Code copy>{"<Checkbox tooltip='more info'>Checkbox with Tooltip</Checkbox>"}</Code>
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

export default PagesComponentsCheckbox as NextPage;
