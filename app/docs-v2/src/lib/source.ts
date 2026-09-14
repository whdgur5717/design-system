import type { CollectionEntry } from "astro:content"
import { getCollection } from "astro:content"
import type { StructuredData } from "fumadocs-core/mdx-plugins"
import { structure } from "fumadocs-core/mdx-plugins"
import type { MetaData, StaticSource } from "fumadocs-core/source"
import { loader } from "fumadocs-core/source"

const posts = await getCollection("posts")

type PostPageData = CollectionEntry<"posts">["data"] & {
  entry: CollectionEntry<"posts">
  structuredData: StructuredData
}

const postSource: StaticSource<{
  pageData: PostPageData
  metaData: MetaData
}> = {
  files: posts.map((post) => ({
    type: "page",
    path: `${post.id}.mdx`,
    slugs: [String(post.data.order)],
    data: {
      ...post.data,
      entry: post,
      structuredData: structure(post.body ?? ""),
    },
  })),
}

export const source = loader(postSource, { baseUrl: "/post" })
