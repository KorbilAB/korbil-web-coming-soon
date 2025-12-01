# Directus Blog API Query Guide - Getting Complete Data

## Problem: Getting Foreign Keys Instead of Actual Data

When you query `/items/blogs`, you get raw IDs like:
```json
{
  "featured_image": "eba7833b-838b-4220-83c4-91962341528e",
  "category": 1,
  "translations": [1, 12]
}
```

## Solution: Use the `fields` Parameter

You need to tell Directus to **expand** (resolve) these relationships.

---

## Quick Reference: Complete Blog Query

### Get All Published Blogs with Full Data

```bash
https://cms.korbil.io/items/blogs?fields=*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*&filter[status][_eq]=published&sort=-published_date
```

### Breakdown of the Query:

```
/items/blogs                          # Collection endpoint
?fields=                              # What fields to return
  *,                                  # All fields from blogs table
  featured_image.*,                   # Expand featured_image file
  seo_image.*,                        # Expand seo_image file
  category.*,                         # Expand category relation
  category.translations.*,            # Expand category translations
  translations.*                      # Expand blog translations
&filter[status][_eq]=published       # Only published blogs
&sort=-published_date                 # Sort by date (newest first)
```

---

## Complete API Examples

### 1. Get All Published Blogs (English only)

```bash
GET /items/blogs?fields=*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*&filter[status][_eq]=published&deep[translations][_filter][languages_code][_eq]=en-US&sort=-published_date
```

**Returns:**
```json
{
  "data": [
    {
      "id": 1,
      "status": "published",
      "date_created": "2025-11-05T11:54:10.338Z",
      "date_updated": "2025-11-05T12:05:27.792Z",
      "featured_image": {
        "id": "eba7833b-838b-4220-83c4-91962341528e",
        "filename_download": "blog-image.jpg",
        "type": "image/jpeg",
        "filesize": 245678,
        "width": 1200,
        "height": 630,
        "title": "Blog Image",
        "description": null,
        "uploaded_on": "2025-11-05T11:50:00.000Z",
        "modified_on": "2025-11-05T11:50:00.000Z"
      },
      "featured_image_alt": "gg-wp",
      "category": {
        "id": 1,
        "key": "pro-tips",
        "icon": "💡",
        "color": "#4CAF50",
        "status": "published",
        "translations": [
          {
            "id": 1,
            "languages_code": "en-US",
            "name": "Pro Tips",
            "description": "Professional tips and advice"
          }
        ]
      },
      "seo_title": "Test",
      "seo_description": "test description",
      "seo_keywords": ["test"],
      "canonical_url": "test",
      "translations": [
        {
          "id": 1,
          "languages_code": "en-US",
          "title": "Getting a Driving Licence in Sweden",
          "slug": "getting-driving-licence-sweden",
          "excerpt": "Learn how to get your driving licence...",
          "content": "<h2>Step 1: Check Your Current Licence</h2><p>...</p>"
        }
      ]
    }
  ]
}
```

---

### 2. Get Single Blog by Slug (with all translations)

```bash
GET /items/blogs?filter[translations][slug][_eq]=getting-driving-licence-sweden&fields=*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*&limit=1
```

---

### 3. Get Blog by ID with All Languages

```bash
GET /items/blogs/1?fields=*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*
```

---

### 4. Get Featured Blogs Only

```bash
GET /items/blogs?filter[is_featured][_eq]=true&filter[status][_eq]=published&fields=*,featured_image.*,translations.*&sort=-published_date&limit=3
```

---

### 5. Get Blogs by Category

```bash
GET /items/blogs?filter[category][key][_eq]=pro-tips&filter[status][_eq]=published&fields=*,featured_image.*,translations.*,category.translations.*&sort=-published_date
```

---

## Field Expansion Reference

### Basic Fields Syntax

| Syntax | What It Does | Example |
|--------|--------------|---------|
| `*` | All fields from main collection | All fields from `blogs` |
| `field_name` | Specific field only | `id`, `status`, `title` |
| `field_name.*` | Expand related item/file | `featured_image.*` |
| `relation.field` | Specific field from relation | `category.key` |
| `relation.*` | All fields from relation | `category.*` |
| `relation.nested.*` | Nested expansion | `category.translations.*` |

### Common Expansions for Blogs

```bash
# Minimal - Just IDs
fields=id,status,title

# With images
fields=*,featured_image.*

# With category
fields=*,category.*

# With category names (translated)
fields=*,category.*,category.translations.*

# With blog translations
fields=*,translations.*

# Complete (everything)
fields=*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*
```

---

## Filtering Options

### By Status
```bash
filter[status][_eq]=published
filter[status][_in]=published,draft
filter[status][_neq]=archived
```

### By Date
```bash
# After specific date
filter[published_date][_gte]=2025-01-01

# Before specific date
filter[published_date][_lte]=2025-12-31

# Between dates
filter[published_date][_between]=2025-01-01,2025-12-31
```

### By Category
```bash
# By category ID
filter[category][_eq]=1

# By category key
filter[category][key][_eq]=pro-tips

# Multiple categories
filter[category][key][_in]=pro-tips,news
```

### By Translation Slug
```bash
filter[translations][slug][_eq]=your-blog-slug
```

### By Language
```bash
# Using deep filter for translations
deep[translations][_filter][languages_code][_eq]=en-US
```

### By Featured Status
```bash
filter[is_featured][_eq]=true
```

### Combined Filters
```bash
# Published blogs in English from Pro Tips category
filter[status][_eq]=published
&filter[category][key][_eq]=pro-tips
&deep[translations][_filter][languages_code][_eq]=en-US
```

---

## Sorting Options

```bash
# Newest first
sort=-published_date

# Oldest first
sort=published_date

# By title (A-Z)
sort=translations.title

# By manual sort order
sort=sort

# Multiple sort fields
sort=-is_featured,-published_date
```

---

## Pagination

```bash
# Limit results
limit=10

# Offset/skip results
offset=10

# Page-based pagination
page=2
limit=10

# Get total count
meta=*
```

---

## Complete URL Examples

### Example 1: Homepage - Get 6 Latest Blogs
```
https://cms.korbil.io/items/blogs?fields=*,featured_image.*,translations.*,category.translations.*&filter[status][_eq]=published&deep[translations][_filter][languages_code][_eq]=en-US&sort=-published_date&limit=6
```

### Example 2: Blog Listing Page - Paginated
```
https://cms.korbil.io/items/blogs?fields=*,featured_image.*,translations.*,category.*,category.translations.*&filter[status][_eq]=published&deep[translations][_filter][languages_code][_eq]=en-US&sort=-published_date&page=1&limit=12&meta=*
```

### Example 3: Single Blog Page
```
https://cms.korbil.io/items/blogs?filter[translations][slug][_eq]=getting-driving-licence-sweden&filter[translations][languages_code][_eq]=en-US&filter[status][_eq]=published&fields=*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*&limit=1
```

### Example 4: Category Page
```
https://cms.korbil.io/items/blogs?filter[category][key][_eq]=pro-tips&filter[status][_eq]=published&fields=*,featured_image.*,translations.*&deep[translations][_filter][languages_code][_eq]=en-US&sort=-published_date
```

### Example 5: Get All Categories with Blog Count
```
https://cms.korbil.io/items/categories?fields=*,translations.*&filter[status][_eq]=published&meta=*
```

---

## JavaScript/Fetch Examples

### Fetch All Blogs
```javascript
async function fetchBlogs(language = 'en-US', page = 1, limit = 12) {
  const params = new URLSearchParams({
    'fields': '*,featured_image.*,translations.*,category.*,category.translations.*',
    'filter[status][_eq]': 'published',
    'deep[translations][_filter][languages_code][_eq]': language,
    'sort': '-published_date',
    'page': page,
    'limit': limit,
    'meta': '*'
  });

  const response = await fetch(`https://cms.korbil.io/items/blogs?${params}`);
  const data = await response.json();
  
  return {
    blogs: data.data,
    total: data.meta?.filter_count || 0,
    pages: Math.ceil((data.meta?.filter_count || 0) / limit)
  };
}

// Usage
const result = await fetchBlogs('en-US', 1, 12);
console.log(result.blogs);
```

### Fetch Single Blog by Slug
```javascript
async function fetchBlogBySlug(slug, language = 'en-US') {
  const params = new URLSearchParams({
    'filter[translations][slug][_eq]': slug,
    'filter[translations][languages_code][_eq]': language,
    'filter[status][_eq]': 'published',
    'fields': '*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*',
    'limit': 1
  });

  const response = await fetch(`https://cms.korbil.io/items/blogs?${params}`);
  const data = await response.json();
  
  return data.data[0] || null;
}

// Usage
const blog = await fetchBlogBySlug('getting-driving-licence-sweden');
console.log(blog);
```

### Fetch Blogs by Category
```javascript
async function fetchBlogsByCategory(categoryKey, language = 'en-US') {
  const params = new URLSearchParams({
    'filter[category][key][_eq]': categoryKey,
    'filter[status][_eq]': 'published',
    'deep[translations][_filter][languages_code][_eq]': language,
    'fields': '*,featured_image.*,translations.*,category.translations.*',
    'sort': '-published_date'
  });

  const response = await fetch(`https://cms.korbil.io/items/blogs?${params}`);
  const data = await response.json();
  
  return data.data;
}

// Usage
const proTipsBlogs = await fetchBlogsByCategory('pro-tips');
```

---

## Image URL Construction

When you get image data, construct the full URL:

```javascript
function getImageUrl(imageObject, key = 'system-large-contain') {
  if (!imageObject?.id) return null;
  
  // Direct file URL
  const directUrl = `https://cms.korbil.io/assets/${imageObject.id}`;
  
  // Transformed/resized URL (recommended)
  const transformedUrl = `https://cms.korbil.io/assets/${imageObject.id}?key=${key}`;
  
  return transformedUrl;
}

// Usage
const blog = await fetchBlogBySlug('my-blog');
const imageUrl = getImageUrl(blog.featured_image);
// Returns: https://cms.korbil.io/assets/eba7833b-838b-4220-83c4-91962341528e?key=system-large-contain
```

### Image Transformation Keys
- `system-small-cover` - Small thumbnail (200x200)
- `system-medium-cover` - Medium thumbnail (600x600)
- `system-large-cover` - Large thumbnail (1200x1200)
- `system-small-contain` - Small, contained
- `system-medium-contain` - Medium, contained
- `system-large-contain` - Large, contained

Or use custom parameters:
```
/assets/IMAGE_ID?width=800&height=600&fit=cover&quality=80
```

---

## React/Next.js Example

```typescript
// types/blog.ts
export interface Blog {
  id: number;
  status: string;
  featured_image: {
    id: string;
    filename_download: string;
    type: string;
    width: number;
    height: number;
  };
  featured_image_alt: string;
  category: {
    id: number;
    key: string;
    icon: string;
    color: string;
    translations: Array<{
      languages_code: string;
      name: string;
      description: string;
    }>;
  };
  published_date: string;
  reading_time: number;
  seo_title: string;
  seo_description: string;
  seo_keywords: string[];
  translations: Array<{
    languages_code: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
  }>;
}

// lib/directus.ts
const DIRECTUS_URL = 'https://cms.korbil.io';

export async function getBlogs(language: string = 'en-US'): Promise<Blog[]> {
  const params = new URLSearchParams({
    'fields': '*,featured_image.*,translations.*,category.*,category.translations.*',
    'filter[status][_eq]': 'published',
    'deep[translations][_filter][languages_code][_eq]': language,
    'sort': '-published_date'
  });

  const res = await fetch(`${DIRECTUS_URL}/items/blogs?${params}`, {
    next: { revalidate: 60 } // Next.js: Revalidate every 60 seconds
  });

  if (!res.ok) throw new Error('Failed to fetch blogs');
  
  const data = await res.json();
  return data.data;
}

export async function getBlogBySlug(slug: string, language: string = 'en-US'): Promise<Blog | null> {
  const params = new URLSearchParams({
    'filter[translations][slug][_eq]': slug,
    'filter[translations][languages_code][_eq]': language,
    'filter[status][_eq]': 'published',
    'fields': '*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*',
    'limit': '1'
  });

  const res = await fetch(`${DIRECTUS_URL}/items/blogs?${params}`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) return null;
  
  const data = await res.json();
  return data.data[0] || null;
}

// components/BlogCard.tsx
export function BlogCard({ blog }: { blog: Blog }) {
  const translation = blog.translations[0];
  const categoryTranslation = blog.category.translations[0];
  
  return (
    <div className="blog-card">
      <img 
        src={`https://cms.korbil.io/assets/${blog.featured_image.id}?key=system-large-contain`}
        alt={blog.featured_image_alt}
      />
      <span className="category">{categoryTranslation.name}</span>
      <h3>{translation.title}</h3>
      <p>{translation.excerpt}</p>
      <time>{new Date(blog.published_date).toLocaleDateString()}</time>
    </div>
  );
}
```

---

## Testing Your Queries

### Using Browser
Just paste the URL in your browser:
```
https://cms.korbil.io/items/blogs?fields=*,featured_image.*,translations.*&filter[status][_eq]=published
```

### Using cURL
```bash
curl "https://cms.korbil.io/items/blogs?fields=*,featured_image.*,translations.*&filter[status][_eq]=published"
```

### Using Postman/Insomnia
1. Create new GET request
2. URL: `https://cms.korbil.io/items/blogs`
3. Add query parameters:
   - `fields`: `*,featured_image.*,translations.*`
   - `filter[status][_eq]`: `published`

---

## Common Issues & Solutions

### Issue 1: Getting Empty Translations Array
**Problem:** `translations: []`

**Solution:** Make sure to add translations to your blog items in Directus admin.

### Issue 2: Getting Image ID Instead of URL
**Problem:** `featured_image: "eba7833b-838b-4220-83c4-91962341528e"`

**Solution:** Add `.*` to expand: `fields=*,featured_image.*`

### Issue 3: Category Shows Only ID
**Problem:** `category: 1`

**Solution:** Expand category: `fields=*,category.*,category.translations.*`

### Issue 4: Wrong Language Returned
**Problem:** Getting all languages instead of specific one

**Solution:** Use deep filter:
```
deep[translations][_filter][languages_code][_eq]=en-US
```

### Issue 5: 403 Forbidden
**Problem:** Can't access items

**Solution:** Check permissions in Settings → Roles & Permissions → Public role

---

## Summary: Most Important Query

For most use cases, use this query:

```
/items/blogs?fields=*,featured_image.*,seo_image.*,category.*,category.translations.*,translations.*&filter[status][_eq]=published&deep[translations][_filter][languages_code][_eq]=en-US&sort=-published_date
```

This gives you everything you need:
✅ All blog fields
✅ Full image data with URLs
✅ Category info with translations
✅ Blog content in specified language
✅ Only published blogs
✅ Sorted by newest first

Save this as your base query and modify filters/limits as needed!
