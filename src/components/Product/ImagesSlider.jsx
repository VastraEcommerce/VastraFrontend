import { useState } from 'react';
export default function ImagesSlider({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [zoomStyle, setZoomStyle] = useState({
    backgroundImage: `url(${activeImage})`,
    backgroundPosition: '0% 0%',
  });
  const hoverHandler = (image) => {
    setActiveImage(image);
  };
  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setZoomStyle({
      backgroundImage: `url(${activeImage})`,
      backgroundPosition: `${x}% ${y}%`,
    });
  };
  return (
    <>
      <div className="w-full ">
        <div className="flex flex-col-reverse w-full h-full items-center gap-y-3 lg:flex-row md:items-start md:h-[calc(100%-4rem)] md:gap-x-1">
          {/* thumbs*/}
          <div className="flex flex-nowrap justify-start gap-1 lg:flex-col w-[100%] lg:w-[4rem] lg:h-[370px] carousel lg:carousel-vertical shadow shadow-black">
            {images.map((image, index) => (
              /* img_wrap */
              <div
                className="flex-1 min-w-[4rem] cursor-pointer carousel-item"
                key={index}
                onMouseOver={() => hoverHandler(image, index)}
              >
                <img
                  src={image}
                  alt=""
                  className={`object-contain text-center transition-all ease-linear border border-transparent ${
                    activeImage === image
                      ? 'outline outline-black shadow shadow-black brightness-100'
                      : 'shadow-sm brightness-50'
                  }`}
                />
              </div>
            ))}
          </div>
          {/* preview */}
          <figure
            onMouseMove={handleMouseMove}
            className="bg-no-repeat w-full h-full lg:w-[calc(100%-4rem)] zoom"
            style={zoomStyle}
          >
            <img
              src={activeImage}
              alt=""
              className="block pointer-events-none"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
