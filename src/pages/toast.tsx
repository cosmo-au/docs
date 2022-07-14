/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Element, Code, Box, Stack, Text, Badge, Divider, Button } from '@withcosmo/design-system';
import { NextSeo } from 'next-seo';
import toast from 'react-hot-toast';

export default function ToastDocs(): JSX.Element {
  return (
    <>
      <NextSeo title='Toast' />
      <View inverted container top={8} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Badge>Component</Badge>
            <Text as='h2' bottom={4} top={4}>
              Toast
            </Text>
          </Stack>
        </Stack>
      </View>
      <View container top={7} bottom={8}>
        <Stack direction='row' flex='stretch'>
          <Stack direction='column'>
            <Box>
              <Text as='h4' inline='auto'>
                Default Usage
              </Text>
              <Divider top={4} bottom={4} />
              <Element>
                <Code>{"import toast from 'react-hot-toast';"}</Code>
                <Code
                  css={{
                    paddingTop: '$3',
                  }}>
                  {'<Button onClick={() => toast("This is a normal toast")}>Hello World</Button>'}
                </Code>
              </Element>
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction='row'
          top={7}
          flex='stretch'
          css={{
            phone: {
              marginTop: '0 !important',
              paddingTop: '$5 !important',
            },
          }}>
          <Stack direction='column' width={50}>
            <Box theme='border'>
              <Text as='h4' inline='auto'>
                Demo
              </Text>
              <Divider top={4} bottom={4} />
              <Button onClick={(): any => toast('This is a normal toast')}>Hello World</Button>
            </Box>
          </Stack>
          <Stack
            direction='column'
            width={50}
            css={{
              phone: {
                paddingTop: '$5',
              },
            }}>
            <Box theme='border'>
              <Text as='h4' inline='auto'>
                More Info
              </Text>
              <Divider top={4} bottom={4} />
              <Text as='h6'>
                <a href='https://react-hot-toast.com' target='_blank'>
                  react-hot-toast.com
                </a>
              </Text>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
