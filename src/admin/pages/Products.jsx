import { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import AddProduct from "../AddProduct";
import AllProducts from "../AllProducts";
// import products from "../products.json";
import { useGetAllProductsQuery } from "../../services/productApi";

const Products = () => {
  const { data: products, error } = useGetAllProductsQuery();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All products" value="1" />
              <Tab label="Add Product" value="2" />
              {/* <Tab label="Item Three" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            {products ? <AllProducts products={products} /> : null}
          </TabPanel>
          <TabPanel value="2">
            <AddProduct />
          </TabPanel>
          {/* <TabPanel value="3">Item Three</TabPanel> */}
        </TabContext>
      </Box>
    </>
  );
};

export default Products;
