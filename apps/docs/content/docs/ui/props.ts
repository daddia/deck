import type { Accordion, Accordions } from 'deck-ui/components/accordion';
import type { Callout } from 'deck-ui/components/callout';
import type { File, Folder } from 'deck-ui/components/files';
import type { InlineTOC } from 'deck-ui/components/inline-toc';
import type { TypeTable } from 'deck-ui/components/type-table';
import type { Card } from 'deck-ui/components/card';
import type { DocsLayoutProps } from 'deck-ui/layouts/docs';
import type {
  AnchorHTMLAttributes,
  ComponentPropsWithoutRef,
  HTMLAttributes,
} from 'react';
import type { DocsPageProps } from 'deck-ui/page';
import type { AutoTypeTable } from 'deck-typescript/ui';

export type AccordionsProps = Omit<
  ComponentPropsWithoutRef<typeof Accordions>,
  keyof ComponentPropsWithoutRef<'div'> | 'value' | 'onValueChange'
>;

export type AccordionProps = Omit<
  ComponentPropsWithoutRef<typeof Accordion>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type CalloutProps = Omit<
  ComponentPropsWithoutRef<typeof Callout>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type FileProps = Omit<
  ComponentPropsWithoutRef<typeof File>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type FolderProps = Omit<
  ComponentPropsWithoutRef<typeof Folder>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type InlineTOCProps = Omit<
  ComponentPropsWithoutRef<typeof InlineTOC>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type CardProps = Omit<
  ComponentPropsWithoutRef<typeof Card>,
  keyof Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
>;

export type TypeTableProps = ComponentPropsWithoutRef<typeof TypeTable>;

export type ObjectTypeProps = ComponentPropsWithoutRef<
  typeof TypeTable
>['type'][string];

export type { DocsLayoutProps };

export type NavbarProps = NonNullable<DocsLayoutProps['nav']>;

export type SidebarProps = Omit<
  NonNullable<DocsLayoutProps['sidebar']>,
  keyof HTMLAttributes<HTMLElement>
>;

export type PageProps = DocsPageProps;

export type BreadcrumbProps = NonNullable<DocsPageProps['breadcrumb']>;

export type TOCProps = NonNullable<DocsPageProps['tableOfContent']>;
export type TOCPopoverProps = NonNullable<
  DocsPageProps['tableOfContentPopover']
>;

export type FooterProps = NonNullable<DocsPageProps['footer']>;

export type AutoTypeTableProps = ComponentPropsWithoutRef<typeof AutoTypeTable>;
