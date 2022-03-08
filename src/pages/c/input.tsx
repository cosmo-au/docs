import { Card, InputField, Element, Heading } from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { useState } from "react";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesComponentsInput() {
  const [demoValue, setDemoValue] = useState("");

  function handleDemoValue(value: string) {
    setDemoValue(value);
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
          name: "Reset Value",
          value: "#reset",
        },
        {
          name: "Controlled Input",
          value: "#controlled",
        },
        {
          name: "Controlled w/ Submit",
          value: "#controlled-submit",
        },
        {
          name: "Password with Reveal",
          value: "#reveal",
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
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Input/Input.tsx"
      name="Input"
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
          text="import { InputField } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <InputField />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={"<InputField />"}
        />
      </Element>
      <Element bottom={10} id="reset">
        <Heading level={2}>Reset Value</Heading>
        <Element bottom={4}>
          <Card border>
            <InputField reset />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={"<InputField reset />"}
        />
      </Element>
      <Element bottom={10} id="controlled">
        <Heading level={2}>Controlled Input</Heading>
        <Element bottom={4}>
          <Card border>
            <Heading level={6}>Demo Value: {demoValue}</Heading>
            <InputField
              changeFunction={handleDemoValue}
              reset
              resetFunction={() => setDemoValue("")}
              value={demoValue}
            />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            'const [demoValue, setDemoValue] = useState("");\n\n' +
            "function handleDemoValue(value: string) {\n" +
            "  setDemoValue(value);\n" +
            "}\n\n" +
            `<InputField\n` +
            `  value={demoValue}\n` +
            `  changeFunction={handleDemoValue}\n` +
            `  reset\n` +
            `  resetFunction={() => setDemoValue("")}\n` +
            `/>`
          }
        />
      </Element>
      <Element bottom={10} id="controlled-submit">
        <Heading level={2}>Controlled Input with Submit</Heading>
        <Element bottom={4}>
          <Card border>
            <Heading level={6}>Demo Value: {demoValue}</Heading>
            <InputField
              changeFunction={handleDemoValue}
              submit
              submitFunction={() => setDemoValue("")}
              value={demoValue}
            />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            `<InputField\n` +
            `  value={demoValue}\n` +
            `  changeFunction={handleDemoValue}\n` +
            `  submit\n` +
            `  submitFunction={() => setDemoValue("")}\n` +
            `/>`
          }
        />
      </Element>

      <Element bottom={10} id="reveal">
        <Heading level={2}>Password with Reveal</Heading>
        <Element bottom={4}>
          <Card border>
            <InputField reveal type="password" />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={`<InputField reveal type="password" />`}
        />
      </Element>
      <Element bottom={10} id="copy">
        <Heading level={2}>Copy Value</Heading>
        <Element bottom={4}>
          <Card border>
            <InputField copy />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={`<InputField copy />`}
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

export default PagesComponentsInput as NextPage;
