import { Badge, Block, Button, Column, Element, Heading, Section } from '@cosmo-au/design-system';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ArrowUpRight, Tag } from 'phosphor-react';

function PagesHome() {
  return (
    <>
      <NextSeo title='Cosmo Design System' titleTemplate='%s' />

      <Block bottom={10} inner theme='alternate' top={10}>
        <Section>
          <Column width={50}>
            <Heading level={1}>The Cosmo Design System enforces strict component APIs and performance parameters to streamline development across projects.</Heading>
            <Badge inline inlineSpacer={5} theme='navy'>
              <a href='https://www.typescriptlang.org' rel='noreferrer' target='_blank'>
                <Tag weight='duotone' /> Typescript
              </a>
            </Badge>
            <Badge inline inlineSpacer={5} theme='navy'>
              <a href='https://nextjs.org/docs/basic-features/typescript' rel='noreferrer' target='_blank'>
                <Tag weight='duotone' /> Next.js
              </a>
            </Badge>
            <Badge inline inlineSpacer={5} theme='navy'>
              <a href='https://stitches.dev/docs/benchmarks' rel='noreferrer' target='_blank'>
                {' '}
                <Tag weight='duotone' /> Stitches
              </a>
            </Badge>
            <Element top={8}>
              <Button>
                <Link href='/l/block'>
                  <a>
                    Start here <ArrowUpRight />
                  </a>
                </Link>
              </Button>
            </Element>
          </Column>
        </Section>
      </Block>
      <Block bottom={10} inner top={10}>
        <Section>
          <Column>
            <Heading level={4}>Working on documentation, check back soon.</Heading>
          </Column>
        </Section>
      </Block>
    </>
  );
}

export default PagesHome as NextPage;
