import db from "../db/index.js";
import Brand from "../models/brand.js";
db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
  const brands = [
    {
      title: "HONDA",
      country: "JPAN",
      img: "https://vectorseek.com/wp-content/uploads/2020/12/Honda-Logo-Vector-scaled.jpg",
      link: "https://www.honda.com/",
    },
    {
      title: "Toyota",
      country: "JAPAN",
      img: "https://www.futurelab.net/sites/default/files/toyota-logo.jpg",
      link: "https://www.toyota.com",
    },
    {
      title: "FORD",
      country: "USA",
      img: "https://www.carlogos.org/car-logos/ford-logo-2003.png",
      link: "https://www.ford.com/",
    },
    {
      title: "mercedes-benz",
      country: "German",
      img: "https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png",
      link: "https://www.mercedes-benz.com/",
    },
    {
      title: "BMW",
      country: "German",
      img: "https://i2.wp.com/thinkmarketingmagazine.com/wp-content/uploads/2012/08/bmw-logo.png?ssl=1",
      link: "https://www.bmw.com",
    },
    {
      title: "Lamborghini",
      country: "Italy",
      img: "https://1000logos.net/wp-content/uploads/2018/03/Lamborghini-logo.png",
      link: "https://www.lamborghini.com/en-en",
    },
  ];
  const allBrands = await Brand.insertMany(brands);
  console.log("Created Brand ", allBrands);
};

const run = async () => {
  await main();

  db.close();
};
run();
