import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/illlustrations")

export function getSortedPostsData() {
  // Get file names under /posts
  const filepath = postsDirectory+"/illustrations.json"
  var allPostsData = JSON.parse(fs.readFileSync(filepath))
  return allPostsData
}
