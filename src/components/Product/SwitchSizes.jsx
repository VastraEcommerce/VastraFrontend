import themes from 'daisyui/src/colors/themes';

export default function SwitchSizes({
  sizes,
  onChangeSizeStateHandler,
  currentSizeState,
  boxSize = 9,
  className,
}) {
  return (
    <div
      className={`flex flex-wrap justify-center lg:justify-start items-center gap-1 ${className}`}
    >
      {sizes?.map((z) => (
        <button
          key={z.size}
          className={`btn btn-xs btn-outline btn-square rounded-none font-normal min-h-0 h-[auto] p-4 border border-gray-300 text-gray-600 hover:text-white`}
          onClick={() => onChangeSizeStateHandler(z)}
          style={{
            padding: boxSize,
            minWidth: `${boxSize + 20}px`,
            outline:
              z.size === currentSizeState?.size
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
