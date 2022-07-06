import RateStars from '../components/Product/RateStars';
import SwitchColors from '../components/Product/SwitchColors';
const colors = ['#fff', '#f00', '#0f0', '#00f'];
export default function ProductDetails() {
  return (
    <>
      <div className="capitalize text-center py-4 text-xs md:text-sm xl:text-start">
        home / {'productName'}
      </div>
      <div className="flex flex-wrap justify-between gap-x-6">
        <div className="border-2 border-black flex-grow w-full lg:basis-[calc(50%-1.5rem)] h-[calc(100vh-4.5rem)] lg:h-auto">
          images
        </div>
        <div className="border-2 border-black flex-grow w-full lg:basis-[calc(50%-1.5rem)] lg:max-h-[calc(100vh-4.5rem)] flex flex-col text-center lg:text-start gap-y-4">
          <div className="flex gap-x-2 justify-center capitalize text-sm lg:justify-start">
            <span className="badge-error text-white px-2">{'hot'}</span>
            <span className="badge-info text-white px-2">{'in stock'}</span>
          </div>
          <h1 className="text-xl lg:text-2xl">{'Skinny mid-rise trousers'}</h1>
          <div className="border-black flex justify-center lg:justify-start gap-x-2">
            <RateStars size={25} />
            <span className="underline uppercase font-thin">{'3 reviews'}</span>
          </div>
          <div>
            <span className="uppercase text-slate-500">{'Brand'}:</span>
            <span className="capitalize">{'Polo'}</span>
          </div>
          <h1 className="text-2xl lg:text-3xl">${'171.00'}</h1>
          <h3>
            Hurry! Only <span className="text-red-600">{6}</span> left in Stock!
          </h3>
          <progress className="progress w-full" value={70} max={100}></progress>
          <hr className="my-5" />
          <div>
            <h1 className="uppercase font-thin mb-3">Color:with</h1>
            <SwitchColors colors={colors} />
          </div>
          <div>
            <h1 className="uppercase font-thin mb-3">size:{'xs'}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
