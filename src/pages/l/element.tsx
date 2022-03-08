import { Card, Element, Heading } from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesLayoutsElement() {
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
          name: "API Reference",
          value: "#api",
        },
      ]}
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Layout/Layout.Element.tsx"
      name="Element"
      parent="Layouts"
    >
      <Element bottom={10} id="start">
        <Heading level={2}>Getting Started</Heading>
        <Heading level={5}>Import the component</Heading>
        <Heading bottom={4} level={5}>
          <i>
            (this is literally a wrapped div with some props- used where
            additional styling using Stitches [CSS] is needed)
          </i>
        </Heading>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text="import { Element } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "<Element css={{ verticalAlign: 'middle' }}>/*...children */</Element> \n"
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

export default PagesLayoutsElement as NextPage;
