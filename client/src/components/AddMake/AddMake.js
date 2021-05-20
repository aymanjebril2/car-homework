import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

const AddMake = ({ setMakeAdded, setAdd }) => {
  const [brand, setBrand] = useState({
    title: "",
    country: "",
    img: "",
    link: "",
  });
  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedMake = Object.assign(brand, updatedField);

    setBrand(editedMake);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (brand.title.length && brand.img.length && brand.link.length !== 0) {
    await axios({
      url: `http://localhost:5000/api/brands`,
      method: "POST",
      data: brand,
    })
      .then((res) => console.log(res))

      .catch((err) => console.log(err));
    //}

    setMakeAdded((crate) => !crate);
    setAdd((close) => !close);
  };

  return (
    <div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddMake;
