import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProuductCard/ProductCard";
import { useCurrentWidth } from "../hooks/useCurrentWidth";
import heroImg from "../images/cover.png";
import heroImgMobile from "../images/mobile-cover.png";
import { useGetAllProductsQuery } from "../services/productApi";
import women from "../images/women.png";
import men from "../images/men.png";
import acc from "../images/acc.png";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useGetAllProductsQuery();
  const width = useCurrentWidth();

  return (
    <div>
      {/* Hero Section */}

      <section className="relative sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[40vw]">
        <img
          className="object-cover object-center h-[100%] w-[100%]"
          src={width > 768 ? heroImg : heroImgMobile}
          alt=""
        />
        <div className="absolute top-[30%] sm:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="uppercase text-center text-5xl font-bold">
            Shop Our New Collection
          </h2>
          <p className="uppercase mt-4 text-lg text-center">
            From high to low, Classic or modern we have you covered
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container my-10">
        <div className=" md:columns-3">
          <CategoryCard img={women} categoryName="Women's" link="#" />
          <CategoryCard img={men} categoryName="Men's" link="#" />
          <CategoryCard img={acc} categoryName="Accessories" link="#" />
        </div>
      </section>

      {/* Trending Now Section */}
      {data ? (
        <section className="container">
          <h2 className="uppercase text-center text-lg">Trending Now</h2>
          {/* <div className=" my-10 sm:columns-2 md:columns-3 lg:columns-4"> */}
          <div className="my-10 flex flex-wrap justify-around">
            <ProductCard productInfo={data[0]} />
            <ProductCard productInfo={data[0]} />
            <ProductCard productInfo={data[0]} />
            <ProductCard productInfo={data[0]} />
            <ProductCard productInfo={data[0]} />
          </div>
        </section>
      ) : (
        <>No Data</>
      )}
    </div>
  );
};

export default Home;
