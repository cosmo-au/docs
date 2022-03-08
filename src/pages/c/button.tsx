import { Button, Card, Element, Heading } from "@cosmo-au/design-system";
import type { NextPage } from "next";
import { CurrencyEth } from "phosphor-react";
import { useState } from "react";
import { CodeBlock } from "react-code-blocks";

import Layout from "../../components/Layout";

function PagesComponentsButton() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    if (isLoading === true) {
      setIsLoading(false);
      setTimeout(() => {
        setIsLoading(true);
      }, 2500);
    } else {
      setIsLoading(true);
    }
  };

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
          name: "Icon",
          value: "#icon",
        },
        {
          name: "API Reference",
          value: "#api",
        },
      ]}
      github="https://github.com/cosmo-au/design-system/blob/main/src/components/Button/Button.tsx"
      name="Button"
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
          text="import { Button } from '@cosmo-au/design-system';"
        />
      </Element>
      <Element bottom={10} id="basic">
        <Heading level={2}>Basic Usage</Heading>
        <Element bottom={4}>
          <Card border>
            <Button theme="navy">Basic Button</Button>
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text="<Button theme='navy'>Basic Button</Button>"
        />
      </Element>
      <Element bottom={10} id="icon">
        <Heading level={2}>Icon</Heading>
        <Element bottom={4}>
          <Card border>
            <Button icon={<CurrencyEth />} iconPosition="right" theme="navy">
              Button with Icon
            </Button>
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text="<Button icon={<CurrencyEth />} iconPosition='right' theme='navy'>Button with Icon</Button>"
        />
      </Element>
      <Element bottom={10} id="icon">
        <Heading level={2}>Loader</Heading>
        <Element bottom={4}>
          <Card border>
            <Button
              inline
              inlineSpacer={5}
              onClick={handleLoading}
              theme="yellow"
            >
              Timeout load state
            </Button>
            <Button loader={isLoading} theme="navy">
              Children become visible when loader = false
            </Button>
          </Card>
        </Element>
        <CodeBlock
          language="javascript"
          showLineNumbers
          text="<Button loader={isLoading} theme='navy'>Children become visible when loader = false</Button>"
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

export default PagesComponentsButton as NextPage;
