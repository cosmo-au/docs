import {
  Tooltip,
  Card,
  Element,
  Heading,
  Button,
} from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesComponentsTooltip() {
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
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Tooltip/Tooltip.tsx"
      name="Tooltip"
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
          text="import { Tooltip } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Tooltip passKey="tooltip" trigger={<Button>Hover here</Button>}>
              Tooltip Content
            </Tooltip>
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "<Tooltip passKey='tooltip' trigger={<Button>Hover here</Button>}>Tooltip Content</Tooltip>"
          }
        />
      </Element>
      <Element bottom={10} id="clickable">
        <Heading level={2}>Clickable</Heading>
        <Element bottom={4}>
          <Card border>
            <Tooltip
              passKey="tooltip"
              trigger={<Button>Click here</Button>}
              type="click"
            >
              Tooltip Content
            </Tooltip>
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "<Tooltip passKey='tooltip' trigger={<Button>Click here</Button>} type='click'>Tooltip Content</Tooltip>"
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

export default PagesComponentsTooltip as NextPage;
