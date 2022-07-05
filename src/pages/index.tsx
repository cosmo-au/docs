import { Stack, Text, View, Box, Badge, Divider, Code } from '@cosmo-au/design-system';
import { BoundingBox, Cake, Download } from 'phosphor-react';

export default function Home(): JSX.Element {
  return (
    <>
      <View inverted container top={8} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Text as='h1' bottom={4}>
              The Cosmo Design System enforces strict component APIs and performance parameters to streamline development across projects.
            </Text>
            <Badge inline={4}>
              <a href='https://nextjs.org/docs/basic-features/typescript' target='_blank'>
                Next.js
              </a>
            </Badge>
            <Badge inline={4}>
              <a href='https://www.typescriptlang.org' target='_blank'>
                Typescript
              </a>
            </Badge>
            <Badge>
              <a href='https://stitches.dev/docs/benchmarks' target='_blank'>
                Stitches
              </a>
            </Badge>
          </Stack>
        </Stack>
      </View>
      <View container top={7} bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column' width={33}>
            <Box theme='border'>
              <Badge theme='blue' inline={5}>
                <Download size={25} />
              </Badge>
              <Text as='h4' inline='auto'>
                Install
              </Text>

              <Divider top={4} bottom={4} />
              <Code>{'yarn add @cosmo-au/design-system\n\nyarn add dayjs phosphor-react react-hot-toast'}</Code>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={33}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border'>
              <Badge theme='pink' inline={5}>
                <BoundingBox size={25} />
              </Badge>
              <Text as='h4' inline='auto'>
                Wrap
              </Text>

              <Divider top={4} bottom={4} />

              <Code>
                {'/* Wrap your _app.tsx in the theme provider <Provider> */ \n \n' +
                  "import { Provider } from '@cosmo-au/design-system';\n" +
                  '\n' +
                  '<Provider>\n' +
                  '   <Component {...pageProps} />\n' +
                  '</Provider>\n'}
              </Code>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={33}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border'>
              <Badge theme='green' inline={5}>
                <Cake size={25} />
              </Badge>
              <Text as='h4' inline='auto'>
                Use
              </Text>

              <Divider top={4} bottom={4} />
              <Code>{"/* Import your component and get to work. */ \n \nimport { Button } from '@cosmo-au/design-system';\n\n<Button>This is a button!</Button>\n"}</Code>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
