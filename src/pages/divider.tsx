import { View, Box, Element, Code, Stack, Table, Text, Badge, Divider, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';

export default function DividerDocs(): JSX.Element {
  return (
    <>
      <NextSeo title='Divider' />
      <View inverted container top={8} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Badge>Component</Badge>
            <Text as='h2' bottom={4} top={4}>
              Divider
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
                <Code>{"import { Divider } from '@cosmo-au/design-system';"}</Code>
                <Code
                  css={{
                    paddingTop: '$3',
                  }}>
                  {'<Divider />'}
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
              <Divider top={4} bottom={6} />
              <Divider />
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
                      <Badge theme='border'>bottom</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Number</Badge>
                      <Text as='small' accent top={3}>
                        1 2 3 4 5 6 7 8
                      </Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>top</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Number</Badge>
                      <Text as='small' accent top={3}>
                        1 2 3 4 5 6 7 8
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
