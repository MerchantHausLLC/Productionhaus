/**
 * Christmas Decorations Component
 *
 * This component adds festive Christmas decorations to the site including:
 * - Animated snowfall with snowflakes
 * - Glowing Christmas lights string at the top of the page
 *
 * To remove decorations, simply remove this component from Index.tsx
 */

const ChristmasDecorations = () => {
  // Generate snowflakes
  const snowflakes = Array.from({ length: 20 }, (_, i) => (
    <span key={`snowflake-${i}`} className="snowflake">
      ❄
    </span>
  ));

  // Generate Christmas lights with alternating colors
  const lightColors = ['red', 'gold', 'green', 'blue', 'white'];
  const lights = Array.from({ length: 25 }, (_, i) => (
    <div
      key={`light-${i}`}
      className={`christmas-light ${lightColors[i % lightColors.length]}`}
    />
  ));

  return (
    <>
      {/* Christmas Lights Wire */}
      <div className="christmas-wire" aria-hidden="true" />

      {/* Christmas Lights String */}
      <div className="christmas-lights" aria-hidden="true">
        {lights}
      </div>

      {/* Snowfall */}
      <div className="christmas-snowfall" aria-hidden="true">
        {snowflakes}
      </div>
    </>
  );
};

export default ChristmasDecorations;
