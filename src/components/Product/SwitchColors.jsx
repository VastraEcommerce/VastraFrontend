export default function SwitchColors({
  colors = [],
  size = 8,
  onChange = (checkedValue = '') => {},
}) {
  const onChangeHandelr = (event) => {
    const checkedValue = event.target.value;
    onChange(checkedValue);
  };
  return (
    <div className="flex justify-center lg:justify-start gap-x-5">
      {colors.map((color) => (
        <input
          key={color}
          type="radio"
          name="color"
          value={color}
          onChange={onChangeHandelr}
          className={`radio w-${size} h-${size} p-0 min-h-0 rounded-full shadow-sm active:shadow shadow-black ring-black ring-offset-2 checked:ring-2 transition-all ease-in-out hover:ring-1 hover:ring-black active:ring-1 hover:scale-105 checked:bg-[${color}]`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

/* cursor-pointer transition-all ease-in-out  hover:ring-1 hover:ring-black active:ring-1 hover:scale-105 */
