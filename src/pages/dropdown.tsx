/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Box, Element, Code, Stack, Table, Text, Badge, Divider, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Button, Dropdown } from '@cosmo-au/design-system';
import { NextSeo } from 'next-seo';
import { Heartbeat } from 'phosphor-react';
import { useState } from 'react';

export default function DropdownDocs(): JSX.Element {
  const [activeOption, setActiveOption] = useState('option-1');

  function handleActiveOption(label: string, value: string): any {
    setActiveOption(label);
  }
  return (
    <>
      <NextSeo title='Dropdown' />
      <View inverted container top={8} bottom={7}>
        <Stack direction='row'>
          <Stack direction='column' width={60} offset={20} align='center'>
            <Badge>Component</Badge>
            <Text as='h2' bottom={4} top={4}>
              Dropdown
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
                <Code>{"import { Dropdown } from '@cosmo-au/design-system';"}</Code>
                <Code
                  css={{
                    paddingTop: '$3',
                  }}>
                  {"const [activeOption, setActiveOption] = useState('option-1');\n\n" +
                    'function handleActiveOption (label: string, value: string) {\n' +
                    '  setActiveOption(label);\n' +
                    '};\n\n' +
                    '<Dropdown\n' +
                    '  actions={handleActiveOption}\n' +
                    '  active={activeOption}\n' +
                    '  trigger={<Button>{activeOption}</Button>}\n' +
                    '  options={[\n' +
                    "    { label: 'Option 1', value: 'option-1' },\n" +
                    "    { label: 'Option 2', value: 'option-2' },\n" +
                    '  ]}\n' +
                    '/>'}
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
              <Dropdown
                actions={handleActiveOption}
                active={activeOption}
                trigger={<Button>{activeOption}</Button>}
                options={[
                  { label: 'Option 1', value: 'option-1' },
                  { label: 'Option 2', value: 'option-2' },
                ]}
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
                      <Badge theme='border'>options</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green' icon={<Heartbeat weight='duotone' />}>
                        Array
                      </Badge>
                      <Text as='small' accent top={3}>
                        {'{ label: string, value: string }'}
                      </Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>align</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                      <Text as='small' accent top={3}>
                        left right center
                      </Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>width</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Number | String</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>actions</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Any</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>trigger</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green' icon={<Heartbeat weight='duotone' />}>
                        ReactNode
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>active</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>String</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>submenu</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Boolean</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge theme='border'>locked</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge theme='green'>Boolean</Badge>
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
