import React, { useState } from "react";
import FormModel from "./FormModel";
import axios from "axios";

const AddNewModel = ({ idBrand, setAdd, setModelsCrete }) => {
  const [newModel, setNewModel] = useState({
    name: "",
    type: "",
    picturelink: "",
    brand_id: `${idBrand}`,
  });
  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedMake = Object.assign(newModel, updatedField);

    setNewModel(editedMake);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios({
      url: `/api/models`,
      method: "POST",
      data: newModel,
    })
      .then((res) => console.log(res))

      .catch((err) => console.log(err));

    setAdd((close) => !close);
    setModelsCrete((yup) => !yup);
  };
  return (
    <div>
      <FormModel handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddNewModel;
