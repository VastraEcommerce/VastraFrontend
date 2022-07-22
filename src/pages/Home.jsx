import ProductCard from "../components/ProuductCard/ProductCard";
import { useGetAllProductsQuery } from "../features/services/products";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (data) {
    const productInfo = data.data[0];
    console.log(productInfo);
  }

  return (
    <div>
      {data ? <ProductCard productInfo={data.data[0]} /> : <>No Data</>}
    </div>
  );
};

export default Home;
