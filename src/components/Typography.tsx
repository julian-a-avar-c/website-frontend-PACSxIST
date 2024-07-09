import { cn } from "@/lib/utils";
import React from "react";

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        className={cn(
          "leading-7 [&:not(:first-child)]:mt-6",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    )
  }
)
Paragraph.displayName = "Paragraph"

interface Heading1Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}
const Heading1 = React.forwardRef<HTMLHeadingElement, Heading1Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    )
  }
)
Heading1.displayName = "Heading1";

interface Heading2Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}
const Heading2 = React.forwardRef<HTMLHeadingElement, Heading2Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h2>
    )
  }
)
Heading2.displayName = "Heading2";

interface Heading3Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}
const Heading3 = React.forwardRef<HTMLHeadingElement, Heading3Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h3>
    )
  }
)
Heading3.displayName = "Heading3";

interface AnchorProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string
  }
const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, children, href, ...props }, ref) => {
    return (
      <a
        className={cn(
          "font-medium text-primary underline underline-offset-4",
          className
        )}
        href={href}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    )
  }
)
Anchor.displayName = "Anchor";

interface BlockquoteProps
  extends React.HTMLAttributes<HTMLQuoteElement> {}
const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <blockquote
        className={cn(
          "mt-6 border-l-2 pl-6 italic",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </blockquote>
    )
  }
)
Blockquote.displayName = "Blockquote";

interface UnorderedListProps
  extends React.HTMLAttributes<HTMLUListElement> {}
const UnorderedList = React.forwardRef<HTMLUListElement, UnorderedListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        className={cn(
          "my-6 ml-6 list-disc [&>li]:mt-2",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </ul>
    )
  }
)
UnorderedList.displayName = "UnorderedList";

interface ListItemProps
  extends React.HTMLAttributes<HTMLLIElement> {}
const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        className={cn(
          "",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </li>
    )
  }
)
ListItem.displayName = "ListItem";

interface TableHeadingCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {}
const TableHeadingCell = React.forwardRef<HTMLTableCellElement, TableHeadingCellProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <th
        className={cn(
          "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </th>
    )
  }
)
TableHeadingCell.displayName = "TableHeadingCell";

interface TableCellProps
  extends React.HTMLAttributes<HTMLTableRowElement> {}
const TableCell = React.forwardRef<HTMLTableRowElement, TableCellProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr
        className={cn(
          "m-0 border-t p-0 even:bg-muted",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </tr>
    )
  }
)
TableCell.displayName = "TableCell";

interface TableHeadProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}
const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead
        className={cn(
          "",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </thead>
    )
  }
)
TableHead.displayName = "TableHead";

interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}
const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead
        className={cn(
          "",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </thead>
    )
  }
)
TableBody.displayName = "TableBody";

interface TableProps
  extends React.HTMLAttributes<HTMLTableElement> {}
const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <table
        className={cn(
          "",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </table>
    )
  }
)
Table.displayName = "Table";

export type {
  ParagraphProps,
  Heading1Props,
  Heading2Props,
  Heading3Props,
  AnchorProps,
  BlockquoteProps,
  UnorderedListProps,
  ListItemProps,
  TableProps,
  TableHeadingCellProps,
  TableCellProps,
  TableHeadProps,
  TableBodyProps
}
export {
  Paragraph as P,
  Heading1 as H1,
  Heading2 as H2,
  Heading3 as H3,
  Anchor as A,
  Blockquote,
  UnorderedList as UL,
  ListItem as LI,
  Table,
  TableHeadingCell,
  TableCell,
  TableHead,
  TableBody
}