import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  spacing,
} from "@jongh/ui/tokens.stylex"
import * as stylex from "@stylexjs/stylex"
import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"

const styles = stylex.create({
  paragraph: {
    marginBlockEnd: spacing["6"],
    textWrap: "pretty",
    ":last-child": {
      marginBlockEnd: 0,
    },
  },
  heading: {
    fontWeight: fontWeights.bold,
    textWrap: "balance",
    scrollMarginBlockStart: spacing["6"],
  },
  heading2: {
    marginBlockStart: spacing["4"],
    marginBlockEnd: spacing["4"],
    fontSize: fontSizes.t10,
    lineHeight: lineHeights.t10,
  },
  heading3: {
    marginBlockStart: spacing["4"],
    marginBlockEnd: spacing["3"],
    fontSize: fontSizes.t8,
    lineHeight: lineHeights.t8,
  },
  heading4: {
    marginBlockStart: spacing["3"],
    marginBlockEnd: spacing["3"],
    fontSize: fontSizes.t6,
    lineHeight: lineHeights.t7,
  },
  heading5: {
    marginBlockStart: spacing["3"],
    marginBlockEnd: spacing["2"],
    fontSize: fontSizes.t5,
    lineHeight: lineHeights.t6,
  },
  heading6: {
    marginBlockStart: spacing["3"],
    marginBlockEnd: spacing["2"],
    color: colors["fg.neutral.muted"],
    fontSize: fontSizes.t4,
    lineHeight: lineHeights.t5,
  },
  link: {
    color: colors["fg.brand"],
    textDecorationLine: "underline",
    textDecorationThickness: "1px",
    textUnderlineOffset: spacing["1"],
    ":focus-visible": {
      borderRadius: radii.r1,
      outlineColor: colors["stroke.focus.ring"],
      outlineOffset: spacing["1"],
      outlineStyle: "solid",
      outlineWidth: "2px",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2"],
    marginBlockEnd: spacing["6"],
    paddingInlineStart: spacing["6"],
  },
  unorderedList: {
    listStyleType: "disc",
  },
  orderedList: {
    listStyleType: "decimal",
  },
  listItem: {
    paddingInlineStart: spacing["1"],
    textWrap: "pretty",
  },
  blockquote: {
    marginBlockEnd: spacing["6"],
    paddingInlineStart: spacing["5"],
    borderInlineStartColor: colors["stroke.brand.solid"],
    borderInlineStartStyle: "solid",
    borderInlineStartWidth: "3px",
    color: colors["fg.neutral.muted"],
  },
  code: {
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace",
    fontSize: fontSizes.t4,
    lineHeight: lineHeights.t5,
  },
  pre: {
    maxWidth: "100%",
    marginBlockEnd: spacing["6"],
    overflowX: "auto",
    padding: spacing["5"],
    borderRadius: radii.r3,
    backgroundColor: colors["bg.neutral.inverted"],
    color: colors["fg.neutral.inverted"],
  },
  tableViewport: {
    width: "100%",
    marginBlockEnd: spacing["6"],
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: fontSizes.t4,
    lineHeight: lineHeights.t5,
  },
  tableHeading: {
    paddingBlock: spacing["3"],
    paddingInline: spacing["4"],
    borderBottomColor: colors["stroke.neutral.solid"],
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    fontWeight: fontWeights.bold,
    textAlign: "left",
  },
  tableCell: {
    paddingBlock: spacing["3"],
    paddingInline: spacing["4"],
    borderBottomColor: colors["stroke.neutral.subtle"],
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    verticalAlign: "top",
  },
  thematicBreak: {
    marginBlock: spacing["10"],
    borderBlockStartColor: colors["stroke.neutral.subtle"],
    borderBlockStartStyle: "solid",
    borderBlockStartWidth: "1px",
    borderBlockEndWidth: 0,
    borderInlineWidth: 0,
  },
  details: {
    marginBlockEnd: spacing["6"],
    padding: spacing["4"],
    borderColor: colors["stroke.neutral.subtle"],
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: radii.r3,
  },
  summary: {
    cursor: "pointer",
    fontWeight: fontWeights.bold,
  },
  figure: {
    marginBlockStart: spacing["6"],
    marginBlockEnd: spacing["2"],
    textAlign: "center",
  },
  figcaption: {
    marginBlockStart: spacing["2"],
    color: colors["fg.neutral.subtle"],
    fontSize: fontSizes.t3,
    lineHeight: lineHeights.t3,
  },
  keyboard: {
    paddingBlock: spacing["0.5"],
    paddingInline: spacing["1.5"],
    borderColor: colors["stroke.neutral.muted"],
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: radii.r1,
    backgroundColor: colors["bg.neutral.weak"],
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace",
    fontSize: fontSizes.t3,
    lineHeight: lineHeights.t3,
  },
  note: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["3"],
    marginBlockStart: spacing["4"],
    marginBlockEnd: spacing["6"],
    padding: spacing["6"],
    borderRadius: radii.r3,
    backgroundColor: colors["blue.100"],
  },
  noteLabel: {
    color: colors["fg.brand"],
    fontSize: fontSizes.t2,
    lineHeight: lineHeights.t2,
    fontWeight: fontWeights.bold,
  },
  noteContent: {
    fontSize: fontSizes.t4,
    lineHeight: lineHeights.t5,
  },
})

export const mdxComponents = {
  h2: (props) => (
    <h2 {...props} {...stylex.props(styles.heading, styles.heading2)} />
  ),
  h3: (props) => (
    <h3 {...props} {...stylex.props(styles.heading, styles.heading3)} />
  ),
  h4: (props) => (
    <h4 {...props} {...stylex.props(styles.heading, styles.heading4)} />
  ),
  h5: (props) => (
    <h5 {...props} {...stylex.props(styles.heading, styles.heading5)} />
  ),
  h6: (props) => (
    <h6 {...props} {...stylex.props(styles.heading, styles.heading6)} />
  ),
  p: (props) => <p {...props} {...stylex.props(styles.paragraph)} />,
  a: (props) => <a {...props} {...stylex.props(styles.link)} />,
  ul: (props) => (
    <ul {...props} {...stylex.props(styles.list, styles.unorderedList)} />
  ),
  ol: (props) => (
    <ol {...props} {...stylex.props(styles.list, styles.orderedList)} />
  ),
  li: (props) => <li {...props} {...stylex.props(styles.listItem)} />,
  blockquote: (props) => (
    <blockquote {...props} {...stylex.props(styles.blockquote)} />
  ),
  code: (props) => <code {...props} {...stylex.props(styles.code)} />,
  pre: (props) => <pre {...props} tabIndex={0} {...stylex.props(styles.pre)} />,
  table: (props) => (
    <div {...stylex.props(styles.tableViewport)}>
      <table {...props} {...stylex.props(styles.table)} />
    </div>
  ),
  th: (props) => <th {...props} {...stylex.props(styles.tableHeading)} />,
  td: (props) => <td {...props} {...stylex.props(styles.tableCell)} />,
  hr: (props) => <hr {...props} {...stylex.props(styles.thematicBreak)} />,
  details: (props) => <details {...props} {...stylex.props(styles.details)} />,
  summary: (props) => <summary {...props} {...stylex.props(styles.summary)} />,
  figure: (props) => <figure {...props} {...stylex.props(styles.figure)} />,
  figcaption: (props) => (
    <figcaption {...props} {...stylex.props(styles.figcaption)} />
  ),
  kbd: (props) => <kbd {...props} {...stylex.props(styles.keyboard)} />,
  Note: ({ children, label }: { children: ReactNode; label: string }) => (
    <aside {...stylex.props(styles.note)}>
      <p {...stylex.props(styles.noteLabel)}>{label}</p>
      <div {...stylex.props(styles.noteContent)}>{children}</div>
    </aside>
  ),
} satisfies MDXComponents
