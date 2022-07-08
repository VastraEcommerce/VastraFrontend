import React from "react";
import ProductCard from "./ProductCard";

const dataCard = [
  {
    brand: "Deon_Halvorson98",
    title: "April.Runolfsdottir",
    category: "T-shirts",
    variants: [
      {
        size: "S",
        price: 42,
        color: " #E6B333",
        count: 54,
      },
      {
        size: "XXL",
        price: 62,
        color: " #999966",
        count: 77,
      },
      {
        size: "L",
        price: 10,
        color: "#FFB399",
        count: 67,
      },
      {
        size: "L",
        price: 11,
        color: "#991AFF",
        count: 49,
      },
      {
        size: "XXL",
        price: 26,
        color: " #3366E6",
        count: 31,
      },
      {
        size: "XL",
        price: 44,
        color: " #9900B3",
        count: 76,
      },
      {
        size: "S",
        price: 64,
        color: "#CC80CC ",
        count: 47,
      },
    ],
    description: "Ulices71",
    ratingsAverage: 1,
    brand_thumbnail: "Milan.Collier69",
    ratingsQuantity: 16,
  },
  {
    brand: "Adrain_Labadie",
    title: "Brendan80",
    category: " T-shirts",
    variants: [
      {
        size: "L",
        price: 33,
        color: " #991AFF",
        count: 56,
      },
      {
        size: "XL",
        price: 31,
        color: " #B3B31A",
        count: 38,
      },
      {
        size: "M",
        price: 74,
        color: " #9900B3",
        count: 28,
      },
    ],
    description: "Pink_Smith42",
    ratingsAverage: 1,
    brand_thumbnail: "Ronaldo44",
    ratingsQuantity: 27,
  },
];
export default function DataProduct() {
  console.log(dataCard);
  return (
    <div>
      {dataCard.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}
