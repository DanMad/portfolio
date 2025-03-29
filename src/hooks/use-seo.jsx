import { useEffect } from 'react';

function useSeo({ title, isIndexed = true, url = window.location.href }) {
  useEffect(() => {
    document.title = title;

    let ogTitle = document.querySelector('meta[property="og:title"]');

    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.property = 'og:title';

      document.head.appendChild(ogTitle);
    }

    ogTitle.content = title;

    let ogUrl = document.querySelector('meta[property="og:url"]');

    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.property = 'og:url';

      document.head.appendChild(ogUrl);
    }

    ogUrl.content = url;

    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';

      document.head.appendChild(robots);
    }

    robots.content = isIndexed ? 'index, follow' : 'noindex, nofollow';

    if (isIndexed) {
      let canonical = document.querySelector('link[rel="canonical"]');

      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';

        document.head.appendChild(canonical);
      }

      canonical.href = url;
    } else {
      const canonical = document.querySelector('link[rel="canonical"]');

      if (canonical) {
        canonical.remove();
      }
    }
  }, [isIndexed, title, url]);
}

export default useSeo;
