import { useEffect } from 'react';

/**
 * Custom hook to update document title, meta description, and canonical URL
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title.includes('Durvesh Patil')
        ? title
        : `${title} | Durvesh Patil`;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }
  }, [title, description]);
}
