import { View, Element, Box, Stack, Table, Text, Badge, Divider, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Code } from '@withcosmo/design-system';
import { NextSeo } from 'next-seo';
import { Heartbeat } from 'phosphor-react';

export default function BoxDocs(): JSX.Element {
  return (
    <>
      <NextSeo title='Box' />
      <View inverted container top={8} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Badge>Component</Badge>
            <Text as='h2' bottom={4} top={4}>
              Box
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
                <Code>{"import { Box } from '@withcosmo/design-system';"}</Code>
                <Code
                  css={{
                    paddingTop: '$3',
                  }}>
                  {'<Box>This is a default box</Box>'}
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
              <Box
                css={{
                  height: 'auto',
                }}>
                This is a default box
              </Box>
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
              <Table>
                <TableHead>
                  <TableHeadCell>
                    <Text as='h6'>Property</Text>
                  </TableHeadCell>
                  <TableHeadCell>
                    <Text as='h6'>Type</Text>
                  </TableHeadCell>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>children</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green' icon={<Heartbeat weight='duotone' />}>
                        ReactNode
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>loading</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Boolean</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>image</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>imageCTA</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>imageHeight</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>imageTarget</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>imagePosition</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                      <Text as='small' accent top={3}>
                        top bottom center
                      </Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>imageAlt</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>hover</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Boolean</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>theme</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                      <Text as='small' accent top={3}>
                        default success warning error transparent
                      </Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
