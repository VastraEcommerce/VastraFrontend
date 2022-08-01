export default function SwitchColors({
  colors = [],
  onChangeColorStateHandler,
  currentColorState,
  circleSize = 20,
  className,
}) {
  return (
    <div
      className={`flex flex-wrap justify-center lg:justify-start gap-2 ${className}`}
    >
      {colors?.map((color) => (
        <button
          key={color}
          name="color"
          value={color}
          onClick={() => onChangeColorStateHandler(color)}
          className={`radio p-0 min-h-0 rounded-full shadow-sm shadow-black ring-black ring-offset-1 hover:shadow hover:ring-1 hover:scale-105 hover:ring-black active:ring-2 transition-all ease-in-out duration-150${
            color === currentColorState
              ? 'shadow ring-2 hover:ring-2 scale-105'
              : ''
          } `}
          style={{
            backgroundColor: color,
            width: circleSize,
            height: circleSize,
          }}
        ></button>
      ))}
    </div>
  );
}
