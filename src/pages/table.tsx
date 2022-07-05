import { View, Element, Code, Box, Stack, Table, Text, Badge, Divider, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';
import { Heartbeat } from 'phosphor-react';

export default function PopoverDocs(): JSX.Element {
  return (
    <>
      <NextSeo title='Table' />
      <View inverted container top={8} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Badge>Component</Badge>
            <Text as='h2' bottom={4} top={4}>
              Table
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
                <Code>{"import { Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from '@cosmo-au/design-system';"}</Code>
                <Code
                  css={{
                    paddingTop: '$3',
                  }}>
                  {
                    '<Table>\n  <TableHead>\n    <TableHeadCell>Column 1</TableHeadCell>\n    <TableHeadCell>Column 2</TableHeadCell>\n  </TableHead>\n  <TableBody>\n    <TableRow>\n      <TableCell>Row 1</TableCell>\n      <TableCell>Row 1</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>Row 2</TableCell>\n      <TableCell>Row 2</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>'
                  }
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
              <Table>
                <TableHead>
                  <TableHeadCell>Column 1</TableHeadCell>
                  <TableHeadCell>Column 2</TableHeadCell>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Row 1</TableCell>
                    <TableCell>Row 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Row 2</TableCell>
                    <TableCell>Row 2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
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
                </TableBody>
              </Table>
            </Box>
          </Stack>
        </Stack>
      </View>
    </>
  );
}
