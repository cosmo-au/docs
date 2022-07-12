import { View, Stack, Text, Dropdown, Button, ProviderToggle } from '@cosmo-au/design-system';
import Link from 'next/link';
import { GithubLogo } from 'phosphor-react';

export default function Header(): JSX.Element {
  return (
    <View inverted top={4} bottom={4}>
      <Stack direction='row' flex='center'>
        <Stack direction='column' width={70}>
          <Link href='/'>
            <a>
              <Text as='h5' bold inline={6}>
                Cosmo Developers
              </Text>
            </a>
          </Link>

          <Dropdown
            css={{
              display: 'inline-block',
              marginBottom: 0,
              verticalAlign: 'middle',
            }}
            trigger={
              <Text as='h5' inline={4}>
                Design System
              </Text>
            }
            submenu
            options={[
              { label: 'Avatar', value: '/avatar' },
              { label: 'Badge', value: '/badge' },
              { label: 'Box', value: '/box' },
              { label: 'Button', value: '/button' },
              { label: 'Dates', value: '/dates' },
              { label: 'Dialog', value: '/dialog' },
              { label: 'Divider', value: '/divider' },
              { label: 'Dropdown', value: '/dropdown' },
              { label: 'Field', value: '/field' },
              { label: 'Input', value: '/input' },
              { label: 'Loading', value: '/loading' },
              { label: 'Popover', value: '/popover' },
              { label: 'Table', value: '/table' },
              { label: 'Text', value: '/text' },
              { label: 'Toast', value: '/toast' },
            ]}
          />
        </Stack>
        <Stack
          direction='column'
          align='right'
          width={30}
          css={{
            hidden: 'phone',
          }}>
          <a href='https://github.com/cosmo-au/design-system' target='_blank'>
            <Button inline={4}>
              <GithubLogo weight='duotone' />
            </Button>
          </a>

          <ProviderToggle />
        </Stack>
      </Stack>
    </View>
  );
}
