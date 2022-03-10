import { Block, Column, Card, Button, Heading, Badge, Section, Element } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';
import { GithubLogo, WarningCircle } from 'phosphor-react';
import { ReactNode } from 'react';
import { CodeBlock } from 'react-code-blocks';

export interface Props {
  name: string;
  github: string;
  contents: Array<{
    name: string;
    value: string;
  }>;
  children: ReactNode;
  parent: 'Components' | 'Layouts';
}

export default function Layout({ name, github = '#', contents, children, parent }) {
  return (
    <>
      <NextSeo title={name} />
      <Block bottom={4} inner theme='alternate' top={10}>
        <Section>
          <Column offset={20}>
            <Heading
              css={{
                verticalAlign: 'middle',
              }}
              inline
              inlineSpacer={5}
              level={1}>
              {name}
            </Heading>
            <Badge dot='pulse' inline theme='navy'>
              {parent}
            </Badge>
          </Column>
        </Section>
      </Block>
      <Block bottom={5} inner top={5}>
        <Section>
          <Column
            css={{
              marginTop: '-7.5%',
              height: '100%',
              tablet: {
                marginTop: 'auto',
              },
            }}
            width={20}>
            <Card border>
              <Heading
                css={{
                  opacity: 0.5,
                }}
                level={5}>
                Contents
              </Heading>

              <Heading level={5}>
                <a href='#start'>Installation</a>
              </Heading>
              {contents &&
                contents.map(({ name, value }) => (
                  <Element bottom={3} key={name}>
                    <Heading level={5}>
                      <a href={value}>{name}</a>
                    </Heading>
                  </Element>
                ))}
            </Card>
          </Column>
          <Column
            css={{
              tablet: {
                pt: '$6',
              },
            }}
            width={80}>
            <Element bottom={10}>
              <a href={github} rel='noreferrer' target='_blank'>
                <Button icon={<GithubLogo opacity={0.4} />} inline inlineSpacer={5}>
                  Code
                </Button>
              </a>
              <a href='https://github.com/cosmo-au/design-system/issues/new' rel='noreferrer' target='_blank'>
                <Button icon={<WarningCircle opacity={0.4} />}>Report Issue</Button>
              </a>
            </Element>
            <Element bottom={10} id='installation'>
              <Heading level={2}>Installation</Heading>

              <CodeBlock
                language='javascript'
                showLineNumbers
                text={
                  '/*  Ensure you have installed the required packages (phosphor-react and nookies) */ \n' +
                  'yarn add @cosmo-au/design-system\n' +
                  '\n' +
                  '/* Wrap your _app.tsx in the theme provider <Context> */ \n' +
                  "import { Context } from '@cosmo-au/design-system';\n" +
                  "import { AppProps } from 'next/app';\n" +
                  '\n' +
                  'function MyApp ({ Component, pageProps }: AppProps) {\n' +
                  '  return (\n' +
                  '    <Context>\n' +
                  '       <Component {...pageProps} />\n' +
                  '    </Context>\n' +
                  '  );\n' +
                  '};\n' +
                  '\n' +
                  'export default MyApp; \n'
                }
              />
            </Element>
            {children}
            <Element>
              <Heading level={6}>@dolmios 2022</Heading>
            </Element>
          </Column>
        </Section>
      </Block>
    </>
  );
}
