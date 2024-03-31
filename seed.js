const mongoose=require('mongoose');
const Product=require('./Models/Product');

const products = [
    {
      name: "Laptop Backpack",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      description: "A cool laptop backpack",
    },
    {
      name: "Casual T-Shirt for Men",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
      description: "Slim-fitting style, t-shoty for men"

    },
    {
      name: "Mens Cotton Jacket",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 55.99,
      description: "Great outerwear jackets for spring, autumn, or winter."
    },
    {
      name: "Mens Casual Slim Fit",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      price: 15.99,
      description: "An aweome shirt for men"
    },
    {
      name: "Women's Gold & Silver Bracelet",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      price: 695,
      description: "A very cool bracelet."
    },
    {
      name: "Solid Gold Petite Micropave",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      price: 168,
      description: "A very cool jewlery for women"
    },
    {
      name: "White Gold Plated Princess",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      price: 9.99,
      description: "A great diamond engagement ring for her."
    },
    {
      name: "Gold-plated Earrings",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      price: 10.99,
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings."
    },
  ];


async function seedDB(){
  await Product.insertMany(products);
  console.log("data seeded successfully");
}

module.exports=seedDB;