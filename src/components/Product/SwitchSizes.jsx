import themes from 'daisyui/src/colors/themes';
export default function SwitchSizes({
  sizes = [{ size: '', count: 0, price: 0 }],
  onChangeSizeStateHandler = (
    sizeValue = { size: '', count: 0, price: 0 }
  ) => {},
  currentSizeState = { size: '', count: 0, price: 0 },
  boxSize = 9,
  className = '',
}) {
  console.log({ sizes, currentSizeState });
  return (
    <div
      className={`flex flex-wrap justify-center lg:justify-start items-center gap-1 ${className}`}
    >
      {sizes.map((z) => (
        <button
          key={z.size}
          className={`btn btn-xs btn-outline rounded-none font-normal min-h-0 h-[auto] p-2 border border-gray-300 text-gray-600`}
          onClick={() => onChangeSizeStateHandler(z)}
          style={{
            padding: boxSize,
            minWidth: `${boxSize + 20}px`,
            outline:
              z.size === currentSizeState.size
                ? 'solid 1.65px black'
                : themes['[data-theme=light]']['neutral-100'],
          }}
        >
          {z.size}
        </button>
      ))}
    </div>
  );
}
