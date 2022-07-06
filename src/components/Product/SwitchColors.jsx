export default function SwitchColors({
  colors = [],
  size = 8,
  onChangeColorStateHandler = (colorValue = '') => {},
  currentColorState = '',
}) {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-5 py-2 px-1">
      {colors.map((color) => (
        <button
          key={color}
          name="color"
          value={color}
          onClick={() => onChangeColorStateHandler(color)}
          className={`radio w-${size} h-${size} p-0 min-h-0 rounded-full shadow-sm shadow-black ring-black ring-offset-1 hover:shadow hover:ring-1 hover:scale-105 hover:ring-black active:ring-2 transition-all ease-in-out duration-150${
            color === currentColorState
              ? 'shadow ring-2 hover:ring-2 scale-105 '
              : ''
          } `}
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </div>
  );
}
