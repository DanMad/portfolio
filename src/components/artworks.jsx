import classNames from 'classnames';
import PropTypes from 'prop-types';
import { memo, useRef } from 'react';
import { useWindowSize } from 'react-use';
import useElementSize from 'hooks/use-element-size';
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

function AngledScreens({ rootSize, urls }) {
  const scale = rootSize.height / 674.124268;

  const toScale = (number) => {
    return toRem(number * scale);
  };

  const isLandscape = rootSize.height < rootSize.width;

  return (
    <>
      <div
        className="shadow shadow--artworks"
        style={{
          filter:
            // The colors here will need to be updated to a token.
            `drop-shadow(${toScale(0)} ${toScale(27)} ${toScale(125)} rgba(2, 5, 7, 0.91))` +
            `drop-shadow(${toScale(0)} ${toScale(-27)} ${toScale(200)} rgba(55, 6, 16, 0.13))`,
        }}
      >
        {isLandscape && (
          <div
            className="shadow__inner"
            style={{
              bottom: toScale(8.780391),
              left: toScale(150.438056),
              height: toScale(556),
              width: toScale(244),
            }}
          />
        )}

        <div
          className="shadow__inner"
          style={{
            ...(!isLandscape && { left: toScale(117.379893) }),
            bottom: toScale(isLandscape ? 34.124268 : 4.39622),
            height: toScale(556),
            width: toScale(244),
          }}
        />

        <div
          className="shadow__inner"
          style={{
            right: toScale(isLandscape ? 150.438056 : 117.379893),
            bottom: toScale(isLandscape ? 8.780391 : 4.39622),
            height: toScale(556),
            width: toScale(244),
          }}
        />
      </div>
      {isLandscape && (
        <>
          <Artwork
            style={{
              right: toScale(66.898216),
              height: toScale(640),
              width: toScale(360),
            }}
            url={urls[2]}
          />
          <div
            className="shadow shadow--artwork"
            style={{
              right: toScale(66.898216),
              height: toScale(640),
              width: toScale(360),
            }}
          >
            <div
              className="shadow__inner"
              style={{
                right: `calc(100% + ${rootSize.width / 2 - 393.001648 * scale}px)`,
                height: toScale(536),
                width: toScale(256),
                boxShadow:
                  // The colors here will need to be updated to a token.
                  `${toScale(0)} ${toScale(-27)} ${toScale(200)} ${toScale(31)} rgba(55, 6, 16, 0.1)` +
                  `, ${toScale(0)} ${toScale(27)} ${toScale(94)} ${toScale(31)} #020507`,
              }}
            />
          </div>
        </>
      )}
      <Artwork
        style={{
          left: toScale(isLandscape ? 66.898216 : 33.495012),
          height: toScale(640),
          width: toScale(360),
        }}
        url={urls[1]}
      />
      <div
        className="shadow shadow--artwork"
        style={{
          left: toScale(isLandscape ? 66.898216 : 33.495012),
          height: toScale(640),
          width: toScale(360),
        }}
      >
        <div
          className="shadow__inner"
          style={{
            left: isLandscape
              ? `calc(100% + ${rootSize.width / 2 - 393.001648 * scale}px)`
              : `${rootSize.width - (393.001648 - 51.928736) * scale}px`,
            height: toScale(536),
            width: toScale(256),
            boxShadow:
              // The colors here will need to be updated to a token.
              `${toScale(0)} ${toScale(-27)} ${toScale(200)} ${toScale(31)} rgba(55, 6, 16, 0.1)` +
              `, ${toScale(0)} ${toScale(27)} ${toScale(94)} ${toScale(31)} #020507`,
          }}
        />
      </div>
      <Artwork
        style={{
          ...(isLandscape
            ? { bottom: toScale(34.124268) }
            : { right: toScale(33.495012) }),
          height: toScale(640),
          width: toScale(360),
        }}
        url={urls[0]}
      />
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

function Pages({ rootSize, urls }) {
  const scale = rootSize.height / 899.501099;

  const toScale = (number) => {
    return toRem(number * scale);
  };

  return (
    <>
      <div
        className="shadow shadow--artworks"
        style={{
          filter:
            // The colors here will need to be updated to a token.
            `drop-shadow(${toScale(0)} ${toScale(27)} ${toScale(125)} rgba(2, 5, 7, 0.91))` +
            `drop-shadow(${toScale(0)} ${toScale(-27)} ${toScale(200)} rgba(55, 6, 16, 0.13))`,
        }}
      >
        <div
          className="shadow__inner"
          style={{
            bottom: toScale(28.805664),
            left: toScale(84),
            height: toScale(757.889771),
            width: toScale(479.275574),
          }}
        />
        <div
          className="shadow__inner"
          style={{
            right: toScale(171.541283),
            bottom: toScale(8.780391),
            height: toScale(757.889771),
            width: toScale(479.275574),
          }}
        />
      </div>
      <Artwork
        style={{
          right: toScale(88.001444),
          height: toScale(841.889771),
          width: toScale(595.275574),
        }}
        url={urls[1]}
      />
      <div
        className="shadow shadow--artwork"
        style={{
          right: toScale(88.001444),
          height: toScale(841.889771),
          width: toScale(595.275574),
        }}
      >
        <div
          className="shadow__inner"
          style={{
            right: `calc(100% + ${rootSize.width - (52 + 491.275574) * scale - 680.016052 * scale}px)`,
            height: toScale(737.889771),
            width: toScale(491.275574),
            boxShadow:
              // The colors here will need to be updated to a token.
              `${toScale(0)} ${toScale(-27)} ${toScale(200)} ${toScale(31)} rgba(55, 6, 16, 0.1)` +
              `, ${toScale(0)} ${toScale(27)} ${toScale(94)} ${toScale(31)} #020507`,
          }}
        />
      </div>
      <Artwork
        style={{
          bottom: toScale(28.805664),
          height: toScale(841.889771),
          width: toScale(595.275574),
        }}
        url={urls[0]}
      />
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

function StraightScreens({ rootSize, urls }) {
  const scale = rootSize.height / 674.124268;

  const toScale = (number) => {
    return toRem(number * scale);
  };

  const isLandscape = rootSize.height < rootSize.width;

  return (
    <>
      <div
        className="shadow shadow--artworks"
        style={{
          filter:
            // The colors here will need to be updated to a token.
            `drop-shadow(${toScale(0)} ${toScale(27)} ${toScale(125)} rgba(2, 5, 7, 0.91))` +
            `drop-shadow(${toScale(0)} ${toScale(-27)} ${toScale(200)} rgba(55, 6, 16, 0.13))`,
        }}
      >
        {isLandscape && (
          <div
            className="shadow__inner"
            style={{
              bottom: toScale(17.062134),
              height: toScale(556),
              width: toScale(244),
            }}
          />
        )}
        <div
          className="shadow__inner"
          style={{
            right: toScale(84),
            bottom: toScale(isLandscape ? 34.124268 : 25.593201),
            height: toScale(556),
            width: toScale(244),
          }}
        />
        <div
          className="shadow__inner"
          style={{
            ...(!isLandscape && { bottom: toScale(8.531067) }),
            left: toScale(84),
            height: toScale(556),
            width: toScale(244),
          }}
        />
      </div>
      {isLandscape && (
        <>
          <Artwork
            style={{
              bottom: toScale(34.124268),
              height: toScale(640),
              width: toScale(360),
            }}
            url={urls[2]}
          />
          <div
            className="shadow shadow--artwork"
            style={{
              height: toScale(640),
              width: toScale(360),
            }}
          >
            <div
              className="shadow__inner"
              style={{
                bottom: `calc(50% - ${toScale(17.062134)})`,
                right: `calc(100% + ${rootSize.width / 2 - (52 + 256 + 360 / 2) * scale}px)`,
                height: toScale(536),
                width: toScale(256),
                boxShadow:
                  // The colors here will need to be updated to a token.
                  `${toScale(0)} ${toScale(-27)} ${toScale(200)} ${toScale(31)} rgba(55, 6, 16, 0.1)` +
                  `, ${toScale(0)} ${toScale(27)} ${toScale(94)} ${toScale(31)} #020507`,
              }}
            />
          </div>
        </>
      )}
      <Artwork
        style={{
          bottom: toScale(isLandscape ? 17.062134 : 25.593201),
          height: toScale(640),
          width: toScale(360),
        }}
        url={urls[1]}
      />
      <div
        className="shadow shadow--artwork"
        style={{
          bottom: toScale(isLandscape ? 17.062134 : 25.593201),
          height: toScale(640),
          width: toScale(360),
        }}
      >
        <div
          className="shadow__inner"
          style={{
            bottom: `calc(50% - ${toScale(17.062134)})`,
            right: isLandscape
              ? `calc(100% + ${rootSize.width / 2 - (52 + 256 + 360 / 2) * scale}px)`
              : `calc(100% + ${rootSize.width - (52 + 256 + 360) * scale}px)`,
            height: toScale(536),
            width: toScale(256),
            boxShadow:
              // The colors here will need to be updated to a token.
              `${toScale(0)} ${toScale(-27)} ${toScale(200)} ${toScale(31)} rgba(55, 6, 16, 0.1)` +
              `, ${toScale(0)} ${toScale(27)} ${toScale(94)} ${toScale(31)} #020507`,
          }}
        />
      </div>
      <Artwork
        style={{
          ...(!isLandscape && { bottom: toScale(8.531067) }),
          height: toScale(640),
          width: toScale(360),
        }}
        url={urls[0]}
      />
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

function Artworks({ type, urls, hasDarkMode = true }) {
  const artworksRef = useRef(null);
  const artworksSize = useElementSize(artworksRef);

  const artworksInnerRef = useRef(null);
  const artworksInnerSize = useElementSize(artworksInnerRef);

  const { width } = useWindowSize();

  const isLandscapeArtowrk = artworksInnerSize.height < artworksInnerSize.width;
  const isSmallWindow = width < 705;

  const artworksClassName = classNames(
    'artworks',
    `artworks--${type}`,
    hasDarkMode && 'artworks--has-dark-mode',
    isLandscapeArtowrk && 'artworks--is-landscape',
  );

  const artworksInnerStyle = {
    maxHeight: toRem(
      artworksSize.width * artworksTypes[type].aspectRatio.height,
    ),
    maxWidth: toRem(
      artworksSize.height * artworksTypes[type].aspectRatio.width,
    ),
  };

  const Component = artworksTypes[type].component;
  // Fairly certain this is necessary.
  const MemoizedComponent = memo(Component);

  return (
    <div className={artworksClassName} ref={artworksRef}>
      <div
        className="artworks__inner"
        ref={artworksInnerRef}
        style={isSmallWindow ? null : artworksInnerStyle}
      >
        <MemoizedComponent rootSize={artworksInnerSize} urls={urls} />
      </div>
    </div>
  );
}

Artworks.displayName = 'Artworks';

Artworks.propTypes = {
  hasDarkMode: PropTypes.bool,
  type: PropTypes.oneOf(['angled-screens', 'pages', 'straight-screens'])
    .isRequired,
};

export default Artworks;
