import ProductCard from "../components/ProuductCard/ProductCard";
import { useCurrentWidth } from "../hooks/useCurrentWidth";
import heroImg from "../images/cover.png";
import heroImgMobile from "../images/mobile-cover.png";
import { useGetAllProductsQuery } from "../services/productApi";

const Home = () => {
  const { data } = useGetAllProductsQuery();

  const width = useCurrentWidth();

  return (
    <div>
      {/* Hero Section */}

      <section className='relative sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[40vw]'>
        <img
          className='object-cover object-center h-[100%] w-[100%]'
          src={width > 768 ? heroImg : heroImgMobile}
          alt=''
        />
        <div className='absolute top-[30%] sm:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h2 className='uppercase text-center text-5xl font-bold'>
            Shop Our New Collection
          </h2>
          <p className='uppercase mt-4 text-lg text-center'>
            From high to low, Classic or modern we have you covered
          </p>
        </div>
      </section>

      {data ? <ProductCard productInfo={data.data[0]} /> : <>No Data</>}
    </div>
  );
};

export default Home;
