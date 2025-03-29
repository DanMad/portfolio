import { useEffect } from 'react';

function useSeo({ title, isIndexed = true, url = window.location.href }) {
  useEffect(() => {
    document.title = title;

    let ogTitleElement = document.querySelector('meta[property="og:title"]');

    if (!ogTitleElement) {
      ogTitleElement = document.createElement('meta');
      ogTitleElement.property = 'og:title';

      document.head.appendChild(ogTitleElement);
    }

    ogTitleElement.content = title;

    let ogUrlElement = document.querySelector('meta[property="og:url"]');

    if (!ogUrlElement) {
      ogUrlElement = document.createElement('meta');
      ogUrlElement.property = 'og:url';

      document.head.appendChild(ogUrlElement);
    }

    ogUrlElement.content = url;

    let robotsElement = document.querySelector('meta[name="robots"]');

    if (!robotsElement) {
      robotsElement = document.createElement('meta');
      robotsElement.name = 'robots';

      document.head.appendChild(robotsElement);
    }

    robotsElement.content = isIndexed ? 'index, follow' : 'noindex, nofollow';

    if (isIndexed) {
      let canonicalElement = document.querySelector('link[rel="canonical"]');

      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';

        document.head.appendChild(canonicalElement);
      }

      canonicalElement.href = url;
    } else {
      const canonicalElement = document.querySelector('link[rel="canonical"]');

      if (canonicalElement) {
        canonicalElement.remove();
      }
    }
  }, [isIndexed, title, url]);
}

export default useSeo;
