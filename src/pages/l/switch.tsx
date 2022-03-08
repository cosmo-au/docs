import { Card, Element, Heading, Switch } from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesLayoutsSwitch() {
  return (
    <Layout
      contents={[
        {
          name: "Getting Started",
          value: "#start",
        },
        {
          name: "Theme Toggle",
          value: "#basic",
        },
        {
          name: "API Reference",
          value: "#api",
        },
      ]}
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Theme/Theme.Switch.tsx"
      name="Switch"
      parent="Layouts"
    >
      <Element bottom={10} id="start">
        <Heading level={2}>Getting Started</Heading>
        <Heading bottom={4} level={5}>
          Import the component
        </Heading>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text="import { Switch } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Theme Toggle</Heading>
        <Element bottom={4}>
          <Card border>
            <Switch />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "/* Add 'switchable' the theme provider <Context> */ \n" +
            "<Context switchable>\n" +
            "   <Component {...pageProps} />\n" +
            "</Context>\n" +
            "\n" +
            "/* Place <Switch> wherever you like */ \n" +
            "<Switch />\n"
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

export default PagesLayoutsSwitch as NextPage;
