import { View, Box, Stack, Table, Element, Code, Text, Badge, Divider, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Avatar } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';
import { Heartbeat } from 'phosphor-react';

export default function AvatarDocs(): JSX.Element {
  return (
    <>
      <NextSeo title='Avatar' />
      <View inverted container top={8} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Badge>Component</Badge>
            <Text as='h2' bottom={4} top={4}>
              Avatar
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
                <Code>{"import { Avatar } from '@cosmo-au/design-system';"}</Code>
                <Code
                  css={{
                    paddingTop: '$3',
                  }}>
                  {"<Avatar image='#' fallback='DS' width={50} />"}
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
              <Avatar
                image='https://images.unsplash.com/photo-1656403861289-6d467aa2f232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                fallback='JD'
                width={50}
              />
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
                API Reference
              </Text>
              <Divider top={4} bottom={4} />
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
                      <Badge theme='border'>image</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>loading</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green' icon={<Heartbeat weight='duotone' />}>
                        String
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