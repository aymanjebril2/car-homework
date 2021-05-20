import db from "../db/index.js";
import Brand from "../models/brand.js";
import Models from "../models/Models.js";
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const main = async () => {
  const hondaModels = await Brand.find({ title: "HONDA" });

  const honda = [
    {
      name: "CRV",
      type: "SUV",
      picturelink:
        "https://m.media-amazon.com/images/I/71Z1E+eVcdL._UY560_.jpg",
      brand_id: hondaModels[0]._id,
    },
    {
      name: "Civic",
      type: "Sedan",
      picturelink:
        "https://www.motortrend.com/uploads/sites/5/2020/11/2022-Honda-Civic-Prototype-51.jpg?fit=around%7C875:492",
      brand_id: hondaModels[0]._id,
    },
    {
      name: "Accord",
      type: "Sedan",
      picturelink:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-honda-accord-hybrid-109-edit-1604961241.jpg?crop=0.670xw:0.501xh;0.0481xw,0.468xh&resize=1200:*",
      brand_id: hondaModels[0]._id,
    },
  ];
  const toyotaModels = await Brand.find({ title: "Toyota" });
  const toyota = [
    {
      name: "Camry",
      type: "Sedans",
      picturelink:
        "https://cdn-bdcdc.nitrocdn.com/WVCzDXrHdHSOYtWfcgRnPXzsNNOtXdJr/assets/static/optimized/rev-02128d1/wp-content/uploads/2020/02/Camry-Sedan.jpg",
      brand_id: toyotaModels[0]._id,
    },
  ];
  const FORDModels = await Brand.find({ title: "FORD" });
  console.log(FORDModels[0]._id);
  const FORD = [
    {
      name: "Explorer",
      type: "SUV",
      picturelink:
        "https://cdn.motor1.com/images/mgl/4M62Y/s1/2020-ford-explorer.jpg",
      brand_id: FORDModels[0]._id,
    },
    {
      name: "Mustang",
      type: "Convertible",
      picturelink:
        "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/15q2/657948/2015-ford-mustang-ecoboost-convertible-test-review-car-and-driver-photo-660005-s-original.jpg?fill=2:1&resize=1200:*",
      brand_id: FORDModels[0]._id,
    },
  ];
  const MercedesModels = await Brand.find({ title: "mercedes-benz" });
  const Mercedes_Benz = [
    {
      name: "Benz-GT",
      type: "Convertible",
      picturelink:
        "https://cdn.static-carindigo.com/images/content/995917cc465e4e8427158454997a40ca.jpeg",
      brand_id: MercedesModels[0]._id,
    },
    {
      name: "G-Class",
      type: "SUV",
      picturelink:
        "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/15q2/657948/2015-ford-mustang-ecoboost-convertible-test-review-car-and-driver-photo-660005-s-original.jpg?fill=2:1&resize=1200:*",
      brand_id: MercedesModels[0]._id,
    },
  ];
  const BMWModels = await Brand.find({ title: "BMW" });
  const BMW = [
    {
      name: "X1",
      type: "SUV",
      picturelink:
        "https://cars.usnews.com/static/images/Auto/custom/14522/2021_BMW_X1_1.jpg",
      brand_id: BMWModels[0]._id,
    },
    {
      name: "i4",
      type: "Sedan",
      picturelink:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90416001-lowres-1615991689.jpg?crop=0.651xw:0.731xh;0.191xw,0.187xh&resize=640:*",
      brand_id: BMWModels[0]._id,
    },
  ];
  const LamborghiniModels = await Brand.find({ title: "Lamborghini" });
  const Lamborghini = [
    {
      name: "Sian Roadster",
      type: "Super Sport",
      picturelink:
        "https://cdn.motor1.com/images/mgl/WpLQq/s1/lamborghini-sian-roadster.jpg",
      brand_id: LamborghiniModels[0]._id,
    },
    {
      name: "Huracan",
      type: "Convertible",
      picturelink:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-huracan-evo-mmp-1-1600293029.jpg?crop=0.889xw:1.00xh;0.0561xw,0&resize=640:*",
      brand_id: LamborghiniModels[0]._id,
    },
    {
      name: "Urus",
      type: "SUV",
      picturelink:
        "https://cdn.motor1.com/images/mgl/OW1xA/s1/lamborghini-urus.jpg",
      brand_id: LamborghiniModels[0]._id,
    },
  ];
  await Models.insertMany(honda);
  await Models.insertMany(toyota);
  await Models.insertMany(FORD);
  await Models.insertMany(Mercedes_Benz);
  await Models.insertMany(BMW);
  await Models.insertMany(Lamborghini);
  console.log("created all models");
};
const run = async () => {
  await main();
  db.close();
};
run();
