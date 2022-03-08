import { Alert, Button, Card, Element, Heading } from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesComponentsAlert() {
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
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Dialog/Dialog.Alert.tsx"
      name="Alert"
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
          text="import { Alert } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Alert
              action={
                // eslint-disable-next-line no-alert
                <Button onClickCapture={() => alert("nice work")} theme="red">
                  Action Button
                </Button>
              }
              cancel="Cancel Button"
              description="Alert Description"
              title="Alert Title"
              trigger={<Button>Open Alert</Button>}
            />
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text={
            "<Alert\n" +
            '  action={<Button onClickCapture={() => alert("nice work")} theme="red">Action Button</Button>}\n' +
            '  cancel="Cancel Button"\n' +
            '  description="Alert Description"\n' +
            '  title="Alert Title"\n' +
            "  trigger={<Button>Open Alert</Button>}\n" +
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

export default PagesComponentsAlert as NextPage;
