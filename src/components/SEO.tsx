import { useEffect } from 'react'
import { SITE_CONFIG } from '../data/config'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogType?: 'website' | 'article'
}

export default function SEO({ title, description, canonical, ogType = 'website' }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | ${SITE_CONFIG.name}`
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setMeta('description', description)
    setMeta('og:title', `${title} | ${SITE_CONFIG.name}`, true)
    setMeta('og:description', description, true)
    setMeta('og:type', ogType, true)
    setMeta('og:image', SITE_CONFIG.seo.ogImage, true)
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link') as HTMLLinkElement
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.href = `${SITE_CONFIG.seo.canonicalBase}${canonical}`
    }
  }, [title, description, canonical, ogType])

  return null
}
