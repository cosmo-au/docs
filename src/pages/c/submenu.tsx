import {
  Card,
  Submenu,
  Element,
  Heading,
  Button,
} from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesComponentsSubmenu() {
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
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Dialog/Dialog.tsx"
      name="Dialog"
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
          text="import { Submenu } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Submenu
              options={[
                {
                  name: "Switch",
                  value: "/l/switch",
                },
                {
                  name: "Block",
                  value: "/l/block",
                },
                {
                  name: "Section",
                  value: "/l/section",
                },
                {
                  name: "Column",
                  value: "/l/column",
                },
                {
                  name: "Element",
                  value: "/l/element",
                },
              ]}
              passKey="layouts"
              trigger={<Button>Layouts</Button>}
            ></Submenu>
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "<Submenu\n" +
            "  options={[\n" +
            "    { name: 'Switch', value: '/l/switch' },\n" +
            "    { name: 'Block', value: '/l/block' },\n" +
            "    { name: 'Section', value: '/l/section' },\n" +
            "    { name: 'Column', value: '/l/column' },\n" +
            "    { name: 'Element', value: '/l/element' },\n" +
            "  ]}\n" +
            "  passKey='layouts'\n" +
            "  trigger={<Button>Layouts</Button>}\n" +
            "/>"
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

export default PagesComponentsSubmenu as NextPage;
