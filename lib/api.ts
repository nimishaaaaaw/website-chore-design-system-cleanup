import fs from 'fs'
import path from 'path'

const contentDirectory = path.join(process.cwd(), 'content/blogs')

export type PostMetadata = {
  title: string
  slug: string
  author: string
  publishedDate: string
  subtitle?: string
  role?: string
  draft?: boolean
  mainImage?: {
    url: string
    alt: string
  }
  seo: {
    title: string
    description: string
    keywords?: string[]
  }
  theme?: {
    color?: string
    font?: string
  }
}

export type BlogPost = PostMetadata & {
  body: string
  readTime: number
}

export function calculateReadTime(markdownText: string): number {
  if (!markdownText) return 1
  const words = markdownText.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 225)) // 225 wpm is a good standard
}

// Custom lightweight frontmatter parser to avoid dependency issues
function parseMDX(fileContents: string) {
    const lines = fileContents.split('\n')
    const data: any = { seo: {} }
    let content = ''
    
    if (lines[0] && lines[0].trim() === '---') {
        let i = 1
        let currentParent: string | null = null
        
        while (i < lines.length && lines[i].trim() !== '---') {
            const line = lines[i]
            if (line.trim()) {
                const indentMatch = line.match(/^(\s+)/)
                const isIndented = indentMatch !== null
                const colonIndex = line.indexOf(':')
                
                if (colonIndex !== -1) {
                    const key = line.slice(0, colonIndex).trim()
                    let value = line.slice(colonIndex + 1).trim()
                    
                    // Better unquoting: handles quotes and trailing spaces
                    value = value.replace(/^['"](.*)['"]$/, '$1')
                    
                    if (!isIndented) {
                        currentParent = key
                        if (!value) {
                            data[key] = {}
                        } else {
                            if (value.startsWith('[') && value.endsWith(']')) {
                                const items = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''))
                                data[key] = items
                            } else {
                                const boolValue = value.toLowerCase()
                                if (boolValue === 'true') data[key] = true
                                else if (boolValue === 'false') data[key] = false
                                else data[key] = value
                            }
                        }
                    } else if (currentParent && data[currentParent] && typeof data[currentParent] === 'object') {
                        // Support arrays in nested objects
                        if (value.startsWith('[') && value.endsWith(']')) {
                            const items = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''))
                            data[currentParent][key] = items
                        } else {
                            data[currentParent][key] = value
                        }
                    }
                }
            }
            i++
        }
        content = lines.slice(i + 1).join('\n').trim()
    } else {
        content = fileContents.trim()
    }
    
    // Map to our strict metadata type
    const metadata: PostMetadata = {
        title: data.title || '',
        slug: data.slug || '',
        author: data.author || 'MediKloud Team',
        publishedDate: data.publishedDate || new Date().toISOString().split('T')[0],
        subtitle: data.subtitle,
        role: data.role,
        draft: data.draft === true,
        mainImage: data.mainImage && (typeof data.mainImage === 'string' || data.mainImage.url) ? {
            url: typeof data.mainImage === 'string' ? data.mainImage : data.mainImage.url,
            alt: data.mainImage.alt || data.title || ''
        } : undefined,
        seo: {
            title: data.seo?.title || data.seoTitle || data.title || '',
            description: data.seo?.description || data.seoDescription || data.subtitle || '',
            keywords: data.seo?.keywords || data.keywords || []
        },
        theme: data.theme || { color: 'blue', font: 'sans' }
    }
    
    return { metadata, content }
}

export async function getAllPosts(includeDrafts = false): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(contentDirectory)) return []
    
    const fileNames = fs.readdirSync(contentDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map((fileName) => {
        const slugFromFile = fileName.replace(/\.mdx?$/, '')
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        const { metadata, content } = parseMDX(fileContents)
        
        if (!metadata.slug) metadata.slug = slugFromFile
        
        return {
          ...metadata,
          body: content,
          readTime: calculateReadTime(content)
        }
      })
      
    const filteredPosts = includeDrafts ? allPostsData : allPostsData.filter(post => !post.draft)

    return filteredPosts.sort((a, b) => {
      const dateA = new Date(a.publishedDate).getTime()
      const dateB = new Date(b.publishedDate).getTime()
      return dateB - dateA
    })
  } catch (error) {
    console.error('Error reading local MDX files:', error)
    return []
  }
}

export async function getPostBySlug(slug: string, includeDrafts = false): Promise<BlogPost | null> {
    const posts = await getAllPosts(includeDrafts)
    const post = posts.find((p) => p.slug === slug)
    return post || null
}
