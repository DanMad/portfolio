import classNames from 'classnames';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import { useMeasure, useWindowSize } from 'react-use';
import useHasHover from 'hooks/use-has-hover';
import 'styles/artworks.scss';

const toRem = (value) => {
  return `${value / 16}rem`;
};

function Artwork({ style, url }) {
  return (
    <div className="artwork" style={style}>
      <div className="artwork__inner">
        <div aria-hidden="true" className="artwork__background" />
        <div
          className="artwork__content"
          style={{ backgroundImage: `url('${url}')` }}
        />
        <div aria-hidden="true" className="artwork__embossing" />
      </div>
    </div>
  );
}

Artwork.displayName = 'Artwork';

Artwork.propTypes = {
  style: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

function AngledScreens({ height, width, urls }) {
  const isLandscape = height < width;

  const styles = useMemo(() => {
    const scale = height / 674.124268;

    const toScale = (number) => {
      return toRem(number * scale);
    };

    const scaledSizes = {
      [-27]: toScale(-27),
      [0]: '0rem',
      [4]: toScale(4.39622),
      [8]: toScale(8.780391),
      [27]: toScale(27),
      [31]: toScale(31),
      [33]: toScale(33.495012),
      [34]: toScale(34.124268),
      [66]: toScale(66.898216),
      [94]: toScale(94),
      [117]: toScale(117.379893),
      [125]: toScale(125),
      [150]: toScale(150.438056),
      [200]: toScale(200),
      [244]: toScale(244),
      [256]: toScale(256),
      [360]: toScale(360),
      [536]: toScale(536),
      [556]: toScale(556),
      [640]: toScale(640),
    };

    return [
      {
        filter:
          // The colors here will need to be updated to a token.
          `drop-shadow(${scaledSizes[0]} ${scaledSizes[27]} ${scaledSizes[125]} rgba(2, 5, 7, 0.91))` +
          `drop-shadow(${scaledSizes[0]} ${scaledSizes[-27]} ${scaledSizes[200]} rgba(55, 6, 16, 0.13))`,
      },
      {
        bottom: scaledSizes[8],
        left: scaledSizes[150],
        height: scaledSizes[556],
        width: scaledSizes[244],
      },
      {
        ...(!isLandscape && { left: scaledSizes[117] }),
        bottom: isLandscape ? scaledSizes[34] : scaledSizes[8],
        height: scaledSizes[556],
        width: scaledSizes[244],
      },
      {
        right: isLandscape ? scaledSizes[150] : scaledSizes[117],
        bottom: isLandscape ? scaledSizes[8] : scaledSizes[8],
        height: scaledSizes[556],
        width: scaledSizes[244],
      },
      {
        right: scaledSizes[66],
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
      {
        right: scaledSizes[66],
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
      {
        right: `calc(100% + ${width / 2 - 393.001648 * scale}px)`,
        height: scaledSizes[536],
        width: scaledSizes[256],
        boxShadow:
          // The colors here will need to be updated to a token.
          `${scaledSizes[0]} ${scaledSizes[-27]} ${scaledSizes[200]} ${scaledSizes[31]} rgba(55, 6, 16, 0.1)` +
          `, ${scaledSizes[0]} ${scaledSizes[27]} ${scaledSizes[94]} ${scaledSizes[31]} #020507`,
      },
      {
        left: isLandscape ? scaledSizes[66] : scaledSizes[33],
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
      {
        left: isLandscape ? scaledSizes[66] : scaledSizes[33],
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
      {
        left: isLandscape
          ? `calc(100% + ${width / 2 - 393.001648 * scale}px)`
          : `${width - (393.001648 - 51.928736) * scale}px`,
        height: scaledSizes[536],
        width: scaledSizes[256],
        boxShadow:
          // The colors here will need to be updated to a token.
          `${scaledSizes[0]} ${scaledSizes[-27]} ${scaledSizes[200]} ${scaledSizes[31]} rgba(55, 6, 16, 0.1)` +
          `, ${scaledSizes[0]} ${scaledSizes[27]} ${scaledSizes[94]} ${scaledSizes[31]} #020507`,
      },
      {
        ...(isLandscape
          ? { bottom: scaledSizes[34] }
          : { right: scaledSizes[33] }),
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
    ];
  }, [height, width]);

  return (
    <>
      <div className="shadow shadow--artworks" style={styles[0]}>
        {isLandscape && <div className="shadow__inner" style={styles[1]} />}
        <div className="shadow__inner" style={styles[2]} />
        <div className="shadow__inner" style={styles[3]} />
      </div>
      {isLandscape && (
        <>
          <Artwork style={styles[4]} url={urls[2]} />
          <div className="shadow shadow--artwork" style={styles[5]}>
            <div className="shadow__inner" style={styles[6]} />
          </div>
        </>
      )}
      <Artwork style={styles[7]} url={urls[1]} />
      <div className="shadow shadow--artwork" style={styles[8]}>
        <div className="shadow__inner" style={styles[9]} />
      </div>
      <Artwork style={styles[10]} url={urls[0]} />
    </>
  );
}

AngledScreens.displayName = 'AngledScreens';

AngledScreens.propTypes = {
  rootSize: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Pages({ height, width, urls }) {
  const styles = useMemo(() => {
    const scale = height / 899.501099;

    const toScale = (number) => {
      return toRem(number * scale);
    };

    const scaledSizes = {
      [-27]: toScale(-27),
      [0]: '0rem',
      [8]: toScale(8.780391),
      [27]: toScale(27),
      [28]: toScale(28.805664),
      [31]: toScale(31),
      [84]: toScale(84),
      [88]: toScale(88.001444),
      [94]: toScale(94),
      [125]: toScale(125),
      [171]: toScale(171.541283),
      [200]: toScale(200),
      [479]: toScale(479.275574),
      [491]: toScale(491.275574),
      [595]: toScale(595.275574),
      [737]: toScale(737.889771),
      [757]: toScale(757.889771),
      [841]: toScale(841.889771),
    };

    return [
      {
        filter:
          // The colors here will need to be updated to a token.
          `drop-shadow(${scaledSizes[0]} ${scaledSizes[27]} ${scaledSizes[125]} rgba(2, 5, 7, 0.91))` +
          `drop-shadow(${scaledSizes[0]} ${scaledSizes[-27]} ${scaledSizes[200]} rgba(55, 6, 16, 0.13))`,
      },
      {
        bottom: scaledSizes[28],
        left: scaledSizes[84],
        height: scaledSizes[757],
        width: scaledSizes[479],
      },
      {
        right: scaledSizes[171],
        bottom: scaledSizes[8],
        height: scaledSizes[757],
        width: scaledSizes[479],
      },
      {
        right: scaledSizes[84],
        height: scaledSizes[841],
        width: scaledSizes[595],
      },
      {
        right: scaledSizes[84],
        height: scaledSizes[841],
        width: scaledSizes[595],
      },
      {
        right: `calc(100% + ${width - (52 + 491.275574) * scale - 680.016052 * scale}px)`,
        height: scaledSizes[737],
        width: scaledSizes[491],
        boxShadow:
          // The colors here will need to be updated to a token.
          `${scaledSizes[0]} ${scaledSizes[-27]} ${scaledSizes[200]} ${scaledSizes[31]} rgba(55, 6, 16, 0.1)` +
          `, ${scaledSizes[0]} ${scaledSizes[27]} ${scaledSizes[94]} ${scaledSizes[31]} #020507`,
      },
      {
        bottom: scaledSizes[28],
        height: scaledSizes[841],
        width: scaledSizes[595],
      },
    ];
  }, [height, width]);

  return (
    <>
      <div className="shadow shadow--artworks" style={styles[0]}>
        <div className="shadow__inner" style={styles[1]} />
        <div className="shadow__inner" style={styles[2]} />
      </div>
      <Artwork style={styles[3]} url={urls[1]} />
      <div className="shadow shadow--artwork" style={styles[4]}>
        <div className="shadow__inner" style={styles[5]} />
      </div>
      <Artwork style={styles[6]} url={urls[0]} />
    </>
  );
}

Pages.displayName = 'Pages';

Pages.propTypes = {
  rootSize: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function StraightScreens({ height, width, urls }) {
  const isLandscape = height < width;

  const styles = useMemo(() => {
    const scale = height / 674.124268;

    const toScale = (number) => {
      return toRem(number * scale);
    };

    const scaledSizes = {
      [-27]: toScale(-27),
      [0]: '0rem',
      [8]: toScale(8.531067),
      [17]: toScale(17.062134),
      [25]: toScale(25.593201),
      [27]: toScale(27),
      [31]: toScale(31),
      [34]: toScale(34.124268),
      [84]: toScale(84),
      [94]: toScale(94),
      [125]: toScale(125),
      [200]: toScale(200),
      [244]: toScale(244),
      [256]: toScale(256),
      [360]: toScale(360),
      [536]: toScale(536),
      [556]: toScale(556),
      [640]: toScale(640),
    };

    return [
      {
        filter:
          // The colors here will need to be updated to a token.
          `drop-shadow(${scaledSizes[0]} ${scaledSizes[27]} ${scaledSizes[125]} rgba(2, 5, 7, 0.91))` +
          `drop-shadow(${scaledSizes[0]} ${scaledSizes[-27]} ${scaledSizes[200]} rgba(55, 6, 16, 0.13))`,
      },
      {
        bottom: scaledSizes[17],
        height: scaledSizes[556],
        width: scaledSizes[244],
      },
      {
        right: scaledSizes[84],
        bottom: isLandscape ? scaledSizes[34] : scaledSizes[25],
        height: scaledSizes[556],
        width: scaledSizes[244],
      },
      {
        ...(!isLandscape && { bottom: scaledSizes[8] }),
        left: scaledSizes[84],
        height: scaledSizes[556],
        width: scaledSizes[244],
      },
      {
        bottom: scaledSizes[34],
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
      {
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
      {
        bottom: `calc(50% - ${scaledSizes[17]})`,
        right: `calc(100% + ${width / 2 - (52 + 256 + 360 / 2) * scale}px)`,
        height: scaledSizes[536],
        width: scaledSizes[256],
        boxShadow:
          // The colors here will need to be updated to a token.
          `${scaledSizes[0]} ${scaledSizes[-27]} ${scaledSizes[200]} ${scaledSizes[31]} rgba(55, 6, 16, 0.1)` +
          `, ${scaledSizes[0]} ${scaledSizes[27]} ${scaledSizes[94]} ${scaledSizes[31]} #020507`,
      },
      {
        bottom: isLandscape ? scaledSizes[17] : scaledSizes[25],
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
      {
        bottom: isLandscape ? scaledSizes[17] : scaledSizes[25],
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
      {
        bottom: `calc(50% - ${scaledSizes[17]})`,
        right: isLandscape
          ? `calc(100% + ${width / 2 - (52 + 256 + 360 / 2) * scale}px)`
          : `calc(100% + ${width - (52 + 256 + 360) * scale}px)`,
        height: scaledSizes[536],
        width: scaledSizes[256],
        boxShadow:
          // The colors here will need to be updated to a token.
          `${scaledSizes[0]} ${scaledSizes[-27]} ${scaledSizes[200]} ${scaledSizes[31]} rgba(55, 6, 16, 0.1)` +
          `, ${scaledSizes[0]} ${scaledSizes[27]} ${scaledSizes[94]} ${scaledSizes[31]} #020507`,
      },
      {
        ...(!isLandscape && { bottom: scaledSizes[8] }),
        height: scaledSizes[640],
        width: scaledSizes[360],
      },
    ];
  }, [height, width]);

  return (
    <>
      <div className="shadow shadow--artworks" style={styles[0]}>
        {isLandscape && <div className="shadow__inner" style={styles[1]} />}
        <div className="shadow__inner" style={styles[2]} />
        <div className="shadow__inner" style={styles[3]} />
      </div>
      {isLandscape && (
        <>
          <Artwork style={styles[4]} url={urls[2]} />
          <div className="shadow shadow--artwork" style={styles[5]}>
            <div className="shadow__inner" style={styles[6]} />
          </div>
        </>
      )}
      <Artwork style={styles[7]} url={urls[1]} />
      <div className="shadow shadow--artwork" style={styles[8]}>
        <div className="shadow__inner" style={styles[9]} />
      </div>
      <Artwork style={styles[10]} url={urls[0]} />
    </>
  );
}

StraightScreens.displayName = 'StraightScreens';

StraightScreens.propTypes = {
  rootSize: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
};

const artworksTypes = {
  pages: {
    component: Pages,
    aspectRatio: {
      height: 899.501099 / 680.016052,
      width: 1199.334498 / 899.501099,
    },
  },
  'angled-screens': {
    component: AngledScreens,
    aspectRatio: {
      height: 674.124268 / 425.509247,
      width: 898.832133 / 674.124268,
    },
  },
  'straight-screens': {
    component: StraightScreens,
    aspectRatio: {
      height: 674.124268 / 425.509247,
      width: 898.832133 / 674.124268,
    },
  },
};

const Artworks = memo(({ type, urls, hasDarkMode = true }) => {
  const [artworksRef, artworksSize] = useMeasure();
  const [artworksInnerRef, artworksInnerSize] = useMeasure();

  const hasHover = useHasHover();
  const { width } = useWindowSize();

  const isLandscapeArtowrk = artworksInnerSize.height < artworksInnerSize.width;
  const isSmallWindow = width < 705;

  const artworksClassName = classNames(
    'artworks',
    `artworks--${type}`,
    hasDarkMode && 'artworks--has-dark-mode',
    isLandscapeArtowrk && 'artworks--is-landscape',
  );

  const artworksInnerStyle = useMemo(() => {
    return {
      maxHeight: toRem(
        artworksSize.width * artworksTypes[type].aspectRatio.height,
      ),
      maxWidth: toRem(
        artworksSize.height * artworksTypes[type].aspectRatio.width,
      ),
    };
  }, [artworksSize.height, artworksSize.width]);

  const memoizedArtworksInnerSize = useMemo(() => {
    return artworksInnerSize;
  }, [artworksInnerSize.height, artworksInnerSize.width]);

  const Component = artworksTypes[type].component;

  return (
    <div className={artworksClassName} ref={artworksRef}>
      <div
        className="artworks__inner"
        ref={artworksInnerRef}
        style={hasHover && !isSmallWindow ? artworksInnerStyle : null}
      >
        <Component
          height={memoizedArtworksInnerSize.height}
          urls={urls}
          width={memoizedArtworksInnerSize.width}
        />
      </div>
    </div>
  );
});

Artworks.displayName = 'Artworks';

Artworks.propTypes = {
  hasDarkMode: PropTypes.bool,
  type: PropTypes.oneOf(['angled-screens', 'pages', 'straight-screens'])
    .isRequired,
};

export default Artworks;
