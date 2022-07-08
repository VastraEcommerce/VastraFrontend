import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ header, body }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const content = useRef(null);

  const handleActive = (e) => {
    if (active === true) {
      setActive(false);
      setHeight("0px");
    } else {
      setActive(true);
      setHeight(`${content.current.scrollHeight}px`);
    }
  };

  return (
    <>
      {/* Accordion */}
      <div className="relative overflow-hidden border-b min-w-[200px]">
        <div
          onClick={handleActive}
          className=" h-12 w-full pl-5 flex items-center cursor-pointer"
        >
          <h1 className="text-lg font-semibold ">{header}</h1>
        </div>
        {/* Arrow Icon */}
        <div
          style={{
            pointerEvents: "none",
            transform: active ? `rotate(${0}deg)` : `rotate(${180}deg)`,
          }}
          className={`absolute top-3 right-3 text-2xl transition-transform ease duration-500 cursor-pointer`}
        >
          <IoIosArrowDown />
        </div>
        {/* Content */}
        <div
          ref={content}
          style={{ maxHeight: height }}
          className={`bg-gray-100 overflow-hidden px-5 ease transition-all duration-500`}
        >
          <div className="p-4">
            <p>{body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
