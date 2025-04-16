import { useContext } from 'react';
import { useMeasure, useWindowSize } from 'react-use';
import Context from 'context';
import 'styles/composition';

function Artwork({ src }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          background: `url('${src}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div
        style={{
          mixBlendMode: 'soft-light',
          position: 'absolute',
          top: '0',
          left: '0',
          height: '1px',
          width: '100%',
          background: 'rgb(255 255 255 / 0.22)',
        }}
      />
      <div
        style={{
          mixBlendMode: 'soft-light',
          position: 'absolute',
          top: '1px',
          left: '0',
          height: 'calc(100% - 1px)',
          width: '1px',
          background:
            'linear-gradient(180deg, rgb(255 255 255 / 0.22), rgb(255 255 255 / 0) 50%)',
        }}
      />
      <div
        style={{
          mixBlendMode: 'soft-light',
          position: 'absolute',
          top: '1px',
          right: '0',
          height: 'calc(100% - 1px)',
          width: '1px',
          background:
            'linear-gradient(180deg, rgb(255 255 255 / 0.22), rgb(255 255 255 / 0) 50%)',
        }}
      />
    </>
  );
}

function Pages({ hasDarkMode, height, srcs, width }) {
  const { isDarkMode } = useContext(Context);

  const scale = height / 899.501099;
  const computedHeight = 841.889771 * scale;
  const computedWidth = 595.275574 * scale;

  return (
    <>
      {/* Shadow Group */}
      <div
        className="shadow-group"
        style={{
          transform: 'translateZ(0)',
          height: '100%',
          width: '100%',
        }}
      >
        {/* Second Shadow */}
        <div
          style={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            transformOrigin: 'top right',
            rotate: '6deg',
            translate: `0 ${4.61196 * scale}px`, // 841.889771 - 837.277811
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <div
            className="shadow"
            style={{
              position: 'absolute',
              translate: '4.071035% calc(11.083406% - 1px)', // 20 / 491.275574, 84 / 757.889771
              height: '90.022447%', // 757.889771 / 841.889771
              width: '82.5291%', // 491.275574 / 595.275574
            }}
          />
        </div>

        {/* First Shadow */}
        <div
          style={{
            position: 'absolute',
            bottom: '50%',
            translate: '0 50%',
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <div
            className="shadow"
            style={{
              position: 'absolute',
              translate: '17.098347% calc(11.083406% - 1px)', // 84 / 491.275574, 84 / 757.889771
              height: '90.022447%', // 757.889771 / 841.889771
              width: '82.5291%', // 491.275574 / 595.275574
            }}
          />
        </div>
      </div>

      {/* Second Page */}
      <div
        className="page"
        style={{
          overflow: 'hidden',
          position: 'absolute',
          right: '0',
          bottom: '0',
          transformOrigin: 'top right',
          rotate: '6deg',
          translate: `0 ${4.61196 * scale}px`, // 841.889771 - 837.277811
          height: computedHeight,
          width: computedWidth,
        }}
      >
        <Artwork src={srcs[1]} />
      </div>

      {/* First Shadow */}
      <div
        style={{
          overflow: 'hidden',
          position: 'absolute',
          right: '0',
          bottom: '0',
          transformOrigin: 'top right',
          rotate: '6deg',
          translate: `0 ${4.61196 * scale}px`, // 841.889771 - 837.277811
          height: computedHeight,
          width: computedWidth,
        }}
      >
        <div
          className="shadow"
          style={{
            position: 'absolute',
            transformOrigin: 'top right',
            rotate: '-6deg',
            translate: `calc(${(width - (592.0145921209169 + 51.715139) * scale) * -1}px) 8.208955%`, // This property is a rough estimate
            height: '87.646839%', // 737.889771 / 841.889771
            width: '82.5291%', // 491.275574 / 595.275574
            boxShadow:
              `0 ${-27 * scale}px ${200 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '55, 6, 16, 0.1' : '216, 24, 63, 0.06'})` +
              `, 0 ${27 * scale}px ${94 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '2, 5, 7, 1' : '60, 38, 68, 0.44'})`,
          }}
        />
      </div>

      {/* First Page */}
      <div
        className="page"
        style={{
          overflow: 'hidden',
          position: 'absolute',
          bottom: '50%',
          translate: '0 50%',
          height: computedHeight,
          width: computedWidth,
        }}
      >
        <Artwork src={srcs[0]} />
      </div>
    </>
  );
}

function Screens({ hasDarkMode, height, srcs, width, isAngled = false }) {
  const { isDarkMode } = useContext(Context);

  const isLandscape = height < width;

  const scale = height / 674.124268;
  const computedHeight = 640 * scale;
  const computedWidth = 360 * scale;

  if (isAngled) {
    return (
      <>
        {/* Shadow Group */}
        <div
          className="shadow-group"
          style={{
            transform: 'translateZ(0)',
            height: '100%',
            width: '100%',
          }}
        >
          {/* Third Shadow */}
          {isLandscape && (
            <div
              style={{
                position: 'absolute',
                right: '0',
                bottom: '0',
                transformOrigin: 'top right',
                rotate: '6deg',
                translate: `0 ${3.505987 * scale}px`, // 640 - 636.494013
                height: computedHeight,
                width: computedWidth,
              }}
            >
              <div
                className="shadow"
                style={{
                  position: 'absolute',
                  translate: '7.8125% calc(15.107914% - 1px)', // 20 / 256, 84 / 556
                  height: '86.875%', // 556 / 640
                  width: '71.111111%', // 256 / 360
                }}
              />
            </div>
          )}

          {/* Second Shadow */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              transformOrigin: 'top left',
              rotate: isLandscape ? '-6deg' : '-3deg',
              translate: isLandscape
                ? `0 ${3.505987 * scale}px` // 640 - 636.494013
                : `0 ${0.8770978 * scale}px`, // 640 - 639.122902
              height: computedHeight,
              width: computedWidth,
            }}
          >
            <div
              className="shadow"
              style={{
                position: 'absolute',
                translate: '32.8125% calc(15.107914% - 1px)', // 84 / 256, 84 / 556
                height: '86.875%', // 556 / 640
                width: '71.111111%', // 256 / 360
              }}
            />
          </div>

          {/* First Shadow */}
          <div
            style={{
              position: 'absolute',
              top: isLandscape && '0',
              right: isLandscape ? '50%' : '0',
              bottom: !isLandscape && '0',
              transformOrigin: !isLandscape && 'top right',
              rotate: !isLandscape && '3deg',
              translate: isLandscape ? '50% 0' : `0 ${0.8770978 * scale}px`, // 640 - 639.122902
              height: computedHeight,
              width: computedWidth,
            }}
          >
            <div
              className="shadow"
              style={{
                position: 'absolute',
                translate: isLandscape
                  ? '6.25% calc(15.107914% - 1px)' // 20 / 320, 84 / 556
                  : '7.8125% calc(15.107914% - 1px)', // 20 / 256, 84 / 556
                height: '86.875%', // 556 / 640
                width: isLandscape
                  ? '88.888889%' // 320 / 360
                  : '71.111111%', // 256 / 360
              }}
            />
          </div>
        </div>

        {/* Third Screen */}
        {isLandscape && (
          <div
            className="screen"
            style={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              transformOrigin: 'top right',
              rotate: '6deg',
              translate: `0 ${3.505987 * scale}px`, // 640 - 636.494013
              height: computedHeight,
              width: computedWidth,
            }}
          >
            <Artwork src={srcs[2]} />
          </div>
        )}

        {/* Second Shadow */}
        {isLandscape && (
          <div
            style={{
              overflow: 'hidden',
              position: 'absolute',
              right: '0',
              bottom: '0',
              transformOrigin: 'top right',
              rotate: '6deg',
              translate: `0 ${3.505987 * scale}px`, // 640 - 636.494013
              height: computedHeight,
              width: computedWidth,
            }}
          >
            <div
              className="shadow"
              style={{
                position: 'absolute',
                right: 0,
                transformOrigin: 'top right',
                rotate: '-6deg',
                translate: `calc(${width * -0.5}px + 50%) 8.208955%`, // This property is a rough estimate
                height: '83.75%', // 536 / 640
                width: '71.111111%', // 256 / 360
                boxShadow:
                  `0 ${-27 * scale}px ${200 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '55, 6, 16, 0.1' : '216, 24, 63, 0.06'})` +
                  `, 0 ${27 * scale}px ${94 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '2, 5, 7, 1' : '60, 38, 68, 0.44'})`,
              }}
            />
          </div>
        )}

        {/* Second Screen */}
        <div
          className="screen"
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            transformOrigin: 'top left',
            rotate: isLandscape ? '-6deg' : '-3deg',
            translate: isLandscape
              ? `0 ${3.505987 * scale}px` // 640 - 636.494013
              : `0 ${0.8770978 * scale}px`, // 640 - 639.122902
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <Artwork src={srcs[1]} />
        </div>

        {/* First Shadow */}
        <div
          style={{
            overflow: 'hidden',
            position: 'absolute',
            bottom: '0',
            left: '0',
            transformOrigin: 'top left',
            rotate: isLandscape ? '-6deg' : '-3deg',
            translate: isLandscape
              ? `0 ${3.505987 * scale}px` // 640 - 636.494013
              : `0 ${0.8770978 * scale}px`, // 640 - 639.122902
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <div
            className="shadow"
            style={{
              position: 'absolute',
              transformOrigin: 'top left',
              rotate: '6deg',
              translate: isLandscape
                ? `calc(${width * 0.5}px - 50%) 8.208955%` // This property is a rough estimate
                : `calc(${width - 51.928736 * scale}px - 100%) 8.208955%`, // This property is a rough estimate
              height: '83.75%', // 536 / 640
              width: '71.111111%', // 256 / 360
              boxShadow:
                `0 ${-27 * scale}px ${200 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '55, 6, 16, 0.1' : '216, 24, 63, 0.06'})` +
                `, 0 ${27 * scale}px ${94 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '2, 5, 7, 1' : '60, 38, 68, 0.44'})`,
            }}
          />
        </div>

        {/* First Screen */}
        <div
          className="screen"
          style={{
            position: 'absolute',
            top: isLandscape && '0',
            right: isLandscape ? '50%' : '0',
            bottom: !isLandscape && '0',
            transformOrigin: !isLandscape && 'top right',
            rotate: !isLandscape && '3deg',
            translate: isLandscape ? '50% 0' : `0 ${0.8770978 * scale}px`, // 640 - 639.122902
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <Artwork src={srcs[0]} />
        </div>
      </>
    );
  }

  return (
    <>
      {/* Shadow Group */}
      <div
        className="shadow-group"
        style={{
          transform: 'translateZ(0)',
          height: '100%',
          width: '100%',
        }}
      >
        {/* Third Shadow */}
        {isLandscape && (
          <div
            style={{
              position: 'absolute',
              right: '0',
              bottom: '50%',
              translate: '0 calc(50% - 2.666016%)', // 17.0625 / 640
              height: computedHeight,
              width: computedWidth,
            }}
          >
            <div
              className="shadow"
              style={{
                position: 'absolute',
                translate: '7.8125% calc(15.107914% - 1px)', // 20 / 256, 84 / 556
                height: '86.875%', // 556 / 640
                width: '71.111111%', // 256 / 360
              }}
            />
          </div>
        )}

        {/* Second Shadow */}
        <div
          style={{
            position: 'absolute',
            right: isLandscape ? '50%' : '0',
            bottom: '50%',
            translate: isLandscape ? '50% 50%' : '0 calc(50% - 1.333008%)', // 8.53125 / 640
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <div
            className="shadow"
            style={{
              position: 'absolute',
              translate: isLandscape
                ? '6.25% calc(15.107914% - 1px)' // 20 / 320, 84 / 556
                : '7.8125% calc(15.107914% - 1px)', // 20 / 256, 84 / 556
              height: '86.875%', // 556 / 640
              width: isLandscape
                ? '88.888889%' // 320 / 360
                : '71.111111%', // 256 / 360
            }}
          />
        </div>

        {/* First Shadow */}
        <div
          style={{
            position: 'absolute',
            bottom: '50%',
            left: '0',
            translate: isLandscape
              ? '0 calc(50% + 2.666016%)' // 17.0625 / 640
              : '0 calc(50% + 1.333008%)', // 8.53125 / 640
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <div
            className="shadow"
            style={{
              position: 'absolute',
              translate: '32.8125% calc(15.107914% - 1px)', // 84 / 256, 84 / 556
              height: '86.875%', // 556 / 640
              width: '71.111111%', // 256 / 360
            }}
          />
        </div>
      </div>

      {/* Third Screen */}
      {isLandscape && (
        <div
          className="screen"
          style={{
            overflow: 'hidden',
            position: 'absolute',
            right: '0',
            bottom: '50%',
            translate: '0 calc(50% - 2.666016%)', // 17.0625 / 640
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <Artwork src={srcs[2]} />
        </div>
      )}

      {/* Second Shadow */}
      {isLandscape && (
        <div
          style={{
            overflow: 'hidden',
            position: 'absolute',
            right: '0',
            bottom: '50%',
            translate: '0 calc(50% - 2.666016%)', // 17.0625 / 640
            height: computedHeight,
            width: computedWidth,
          }}
        >
          <div
            className="shadow"
            style={{
              position: 'absolute',
              translate: `calc(20.3125% + ${(width - computedWidth) * -0.5}px) calc(9.701493% + 3.183302%)`, // 52 / 256, 52 / 536, 17.0625 / 536
              height: '83.75%', // 536 / 640
              width: '71.111111%', // 256 / 360
              boxShadow:
                `0 ${-27 * scale}px ${200 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '55, 6, 16, 0.1' : '216, 24, 63, 0.06'})` +
                `, 0 ${27 * scale}px ${94 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '2, 5, 7, 1' : '60, 38, 68, 0.44'})`,
            }}
          />
        </div>
      )}

      {/* Second Screen */}
      <div
        className="screen"
        style={{
          overflow: 'hidden',
          position: 'absolute',
          right: isLandscape ? '50%' : '0',
          bottom: '50%',
          translate: isLandscape ? '50% 50%' : '0 calc(50% - 1.333008%)', // 8.53125 / 640
          height: computedHeight,
          width: computedWidth,
        }}
      >
        <Artwork src={srcs[1]} />
      </div>

      {/* First Shadow */}
      <div
        style={{
          overflow: 'hidden',
          position: 'absolute',
          right: isLandscape ? '50%' : '0',
          bottom: '50%',
          translate: isLandscape ? '50% 50%' : '0 calc(50% - 1.333008%)', // 8.53125 / 640
          height: computedHeight,
          width: computedWidth,
        }}
      >
        <div
          className="shadow"
          style={{
            position: 'absolute',
            translate: isLandscape
              ? `calc(20.3125% + ${(width - computedWidth) * -0.5}px) calc(9.701493% + 3.183302%)` // 52 / 256, 52 / 536, 17.0625 / 536
              : `calc(20.3125% + ${(width - computedWidth) * -1}px) calc(9.701493% + 3.183302%)`, // 52 / 256, 52 / 536, 17.0625 / 536
            height: '83.75%', // 536 / 640
            width: '71.111111%', // 256 / 360
            boxShadow:
              `0 ${-27 * scale}px ${200 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '55, 6, 16, 0.1' : '216, 24, 63, 0.06'})` +
              `, 0 ${27 * scale}px ${94 * scale}px ${31 * scale}px rgba(${hasDarkMode && isDarkMode ? '2, 5, 7, 1' : '60, 38, 68, 0.44'})`,
          }}
        />
      </div>

      {/* First Screen */}
      <div
        className="screen"
        style={{
          overflow: 'hidden',
          position: 'absolute',
          bottom: '50%',
          left: '0',
          translate: isLandscape
            ? '0 calc(50% + 2.666016%)' // 17.0625 / 640
            : '0 calc(50% + 1.333008%)', // 8.53125 / 640
          height: computedHeight,
          width: computedWidth,
        }}
      >
        <Artwork src={srcs[0]} />
      </div>
    </>
  );
}

const components = {
  pages: {
    aspectRatio: {
      height: 1.322765, // 899.501099 / 680.016052
      width: 1.333333, // 1199.334498 / 899.501099
    },
    component: Pages,
  },
  screens: {
    aspectRatio: {
      height: 1.584276, // 674.124268 / 425.509247
      width: 1.333333, // 898.832133 / 674.124268
    },
    component: Screens,
  },
};

function Composition({ type, hasDarkMode = true, ...rest }) {
  const [compositionRef, compositionSize] = useMeasure();
  const [compositionInnerRef, compositionInnerSize] = useMeasure();
  const { width } = useWindowSize();

  const isSmallWindow = width < 705;

  const computedClassName = `composition${hasDarkMode ? ' composition--has-dark-mode' : ''}`;

  const compositionInnerStyle = {
    ...(!isSmallWindow && {
      maxHeight: compositionSize.width * components[type].aspectRatio.height,
      maxWidth: compositionSize.height * components[type].aspectRatio.width,
    }),
  };

  const Component = components[type].component;

  return (
    <div className={computedClassName} ref={compositionRef}>
      <div
        className="composition__inner"
        ref={compositionInnerRef}
        style={compositionInnerStyle}
      >
        <Component
          hasDarkMode={hasDarkMode}
          height={compositionInnerSize.height}
          width={compositionInnerSize.width}
          {...rest}
        />
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Artwork.displayName = 'Artwork';
  Composition.displayName = 'Composition';
  Pages.displayName = 'Pages';
  Screens.displayName = 'Screens';
}

export default Composition;
