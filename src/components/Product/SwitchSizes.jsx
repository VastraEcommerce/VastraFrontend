import themes from 'daisyui/src/colors/themes';
export default function SwitchSizes({
  sizes = [],
  onChangeSizeStateHandler = (sizeValue = '') => {},
  currentSizeState = '',
  boxSize = 9,
  className = '',
}) {
  return (
    <div
      className={`flex flex-wrap justify-center lg:justify-start items-center gap-1 ${className}`}
    >
      {sizes.map((size) => (
        <button
          key={size}
          className={`btn btn-xs btn-outline rounded-none font-normal min-h-0 h-[auto] p-2 border border-gray-300 text-gray-600`}
          onClick={() => onChangeSizeStateHandler(size)}
          style={{
            padding: boxSize,
            outline:
              size === currentSizeState
                ? 'solid 1.65px black'
                : themes['[data-theme=light]']['neutral-100'],
          }}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
