import { Card, Dropdown, Element, Heading } from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { useState } from "react";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesComponentsDropdown() {
  const [activeOption, setActiveOption] = useState("Option 1");

  function handleActiveOption(value: string, name: string) {
    setActiveOption(name);

    // eslint-disable-next-line no-console
    console.log(`You selected ${value}`);
  }
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
          text="import { Dropdown } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Dropdown
              actions={handleActiveOption}
              label={activeOption}
              options={[
                {
                  name: "Option 1",
                  value: "option-1",
                },
                {
                  name: "Option 2",
                  value: "option-2",
                },
              ]}
              passKey="basicUsage"
            />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "const [activeOption, setActiveOption] = useState('Option 1');\n\n" +
            "function handleActiveOption (value: string, name: string) {\n" +
            "  setActiveOption(name);\n" +
            "  console.log(value);\n" +
            "};\n\n" +
            "<Dropdown\n" +
            "  actions={handleActiveOption}\n" +
            "  label={activeOption}\n" +
            "  options={[\n" +
            "    { name: 'Option 1', value: 'option-1' },\n" +
            "    { name: 'Option 2', value: 'option-2' },\n" +
            "  ]}\n" +
            "  passKey='basicUsage'\n" +
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

export default PagesComponentsDropdown as NextPage;
