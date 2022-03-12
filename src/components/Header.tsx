import { Block, Button, Column, Heading, Section, Submenu, Switch } from '@cosmo-au/design-system';
import Link from 'next/link';
import { GithubLogo } from 'phosphor-react';
export default function Header() {
  return (
    <Block bottom={4} theme='alternate' top={4}>
      <Section align='center'>
        <Column align='left' width={33.33}>
          <Heading level={3}>
            <Link href='/'>Cosmo Design System</Link>
          </Heading>
        </Column>
        <Column
          align='right'
          css={{
            phone: {
              textAlign: 'left',
            },
          }}
          width={66.66}>
          <Submenu
            options={[
              {
                name: 'Switch',
                value: '/l/switch',
              },
              {
                name: 'Block',
                value: '/l/block',
              },
              {
                name: 'Section',
                value: '/l/section',
              },
              {
                name: 'Column',
                value: '/l/column',
              },
              {
                name: 'Element',
                value: '/l/element',
              },
            ]}
            passKey='layouts'
            trigger={
              <Heading inline inlineSpacer={4} level={5}>
                Layouts
              </Heading>
            }></Submenu>
          <Submenu
            options={[
              {
                name: 'Alert',
                value: '/c/alert',
              },
              {
                name: 'Badge',
                value: '/c/badge',
              },
              {
                name: 'Button',
                value: '/c/button',
              },
              {
                name: 'Card',
                value: '/c/card',
              },
              {
                name: 'Checkbox',
                value: '/c/checkbox',
              },
              {
                name: 'Dialog',
                value: '/c/dialog',
              },
              {
                name: 'Dropdown',
                value: '/c/dropdown',
              },

              {
                name: 'Input',
                value: '/c/input',
              },
              {
                name: 'Submenu',
                value: '/c/submenu',
              },
              {
                name: 'Textarea',
                value: '/c/textarea',
              },
              {
                name: 'Tooltip',
                value: '/c/tooltip',
              },
              {
                name: 'Typography',
                value: '/c/typography',
              },
            ]}
            passKey='components'
            trigger={
              <Heading inline inlineSpacer={5} level={5}>
                Components
              </Heading>
            }></Submenu>
          <Heading inline inlineSpacer={5} level={5}>
            <a href='https://github.com/cosmo-au/design-system/blob/main/LICENSE' rel='noreferrer' target='_blank'>
              License
            </a>
          </Heading>
          <Button inline inlineSpacer={3}>
            <GithubLogo />
          </Button>
          <Switch />
        </Column>
      </Section>
    </Block>
  );
}
