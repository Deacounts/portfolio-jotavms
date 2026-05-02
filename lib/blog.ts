import fs from "fs";
import path from "path";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const frontmatter = parseFrontmatter(raw);
      return { slug, ...frontmatter };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function parseFrontmatter(source: string): Omit<PostMeta, "slug"> {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { title: "Sem título", date: "", description: "" };

  const lines = match[1].split("\n");
  const result: Record<string, string> = {};

  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      result[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
    }
  }

  return {
    title: result.title ?? "Sem título",
    date: result.date ?? "",
    description: result.description ?? "",
  };
}
