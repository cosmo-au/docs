import { Card, Element, Heading, Text } from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesComponentsTypography() {
  return (
    <Layout
      contents={[
        {
          name: "Getting Started",
          value: "#start",
        },
        {
          name: "Basic Usage",
          value: "#basic",
        },
        {
          name: "Clickable",
          value: "#clickable",
        },
        {
          name: "API Reference",
          value: "#api",
        },
      ]}
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Typography/Typography.Heading.tsx"
      name="Typography"
      parent="Components"
    >
      <Element bottom={10} id="start">
        <Heading level={2}>Getting Started</Heading>
        <Heading bottom={4} level={5}>
          Import the component
        </Heading>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text="import { Typography } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Heading level={1}>Heading (Level 1)</Heading>
            <Heading level={2}>Heading (Level 2)</Heading>
            <Heading level={3}>Heading (Level 3)</Heading>
            <Heading level={4}>Heading (Level 4)</Heading>
            <Heading level={5}>Heading (Level 5)</Heading>
            <Heading level={6}>Heading (Level 6)</Heading>
            <Text level={1}>Text (Level 1)</Text>
            <Text level={2}>Text (Level 2)</Text>
            <Text level={3}>Text (Level 3)</Text>
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "<Heading level={1}>Heading (Level 1)</Heading>\n" +
            "<Heading level={2}>Heading (Level 2)</Heading>\n" +
            "<Heading level={3}>Heading (Level 3)</Heading>\n" +
            "<Heading level={4}>Heading (Level 4)</Heading>\n" +
            "<Heading level={5}>Heading (Level 5)</Heading>\n" +
            "<Heading level={6}>Heading (Level 6)</Heading>\n" +
            "<Text level={1}>Text (Level 1)</Text>\n" +
            "<Text level={2}>Text (Level 2)</Text>\n" +
            "<Text level={3}>Text (Level 3)</Text>"
          }
        />
      </Element>
      <Element bottom={10} id="clickable">
        <Heading level={2}>Inline Spacing</Heading>
        <Element bottom={4}>
          <Card border>
            <Heading inline inlineSpacer={5} level={3}>
              inline heading
            </Heading>
            <Heading inline level={4}>
              also inline heading
            </Heading>
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "<Heading level={3} inline inlineSpacer={5}>inline heading</Heading>\n" +
            "<Heading level={4} inline>also inline heading</Heading>"
          }
        />
      </Element>
      <Element bottom={10} id="api">
        <Heading level={2}>API Reference</Heading>
        <Element bottom={4}>
          <Card border>Todo</Card>
        </Element>
      </Element>
    </Layout>
  );
}

export default PagesComponentsTypography as NextPage;
