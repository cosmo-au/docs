import { View, Element, Code, Box, Stack, Table, Text, Badge, Divider, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';
import { Heartbeat } from 'phosphor-react';

export default function TextDocs(): JSX.Element {
  return (
    <>
      <NextSeo title='Text' />
      <View inverted container top={8} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Badge>Component</Badge>
            <Text as='h2' bottom={4} top={4}>
              Text
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
                <Code>{"import { Text } from '@cosmo-au/design-system';"}</Code>
                <Code
                  css={{
                    paddingTop: '$3',
                  }}>
                  {'<Text as="h3">Hello World</Text>'}
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
              <Text as='h3'>Hello World</Text>
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
                      <Badge theme='border'>accent</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Boolean</Badge>
                    </TableCell>
                  </TableRow>
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
                      <Badge theme='border'>bold</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Boolean</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>as</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                      <Text as='small' accent top={3}>
                        h1 h2 h3 h4 h5 h6 p small span
                      </Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>top</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                      <Text as='small' accent top={3}>
                        1 2 3 4 5 6 7 8
                      </Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>bottom</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                      <Text as='small' accent top={3}>
                        1 2 3 4 5 6 7 8
                      </Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>inline</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Number | String</Badge>
                      <Text as='small' accent top={3}>
                        1 2 3 4 5 6 7 8 auto
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
