import { Card, Textarea, Element, Heading } from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesComponentsTextarea() {
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
          name: "Copy Value",
          value: "#copy",
        },
        {
          name: "API Reference",
          value: "#api",
        },
      ]}
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Input/Input.Textarea.tsx"
      name="Textarea"
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
          text="import { Textarea } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Textarea maxLength={50} />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={"<Textarea maxLength={50} />"}
        />
      </Element>
      <Element bottom={10} id="copy">
        <Heading level={2}>Copy Value</Heading>
        <Element bottom={4}>
          <Card border>
            <Textarea copy maxLength={50} />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={"<Textarea copy maxLength={50} />"}
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

export default PagesComponentsTextarea as NextPage;
