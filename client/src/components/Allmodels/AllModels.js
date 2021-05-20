import axios from "axios";
import React, { useEffect, useState } from "react";
import ModelCard from "./ModelCard/ModelCard";
import "../../App.css";
import FormModel from "./AddNewModel/FormModel";

const AllModels = ({ idBrand, modelsCrete }) => {
  const [model, setModel] = useState([]);
  const [deletModel, setDeletModel] = useState(false);
  const [updatingModel, setUpdatingModel] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [update, setUpdate] = useState(false);
  const fetchBrandModel = async () => {
    let URL = `/api/models/${idBrand}`;
    const res = await axios.get(URL);
    setModel(res.data);
  };
  useEffect(() => {
    fetchBrandModel();
  }, [modelsCrete, deletModel, update]);
  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedModel = Object.assign(updatingModel, updatedField);

    setUpdatingModel(editedModel);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `/api/model/${updatingModel._id}`,
      method: "PUT",
      data: updatingModel,
    })
      .then((res) => {
        console.log(res);
        setUpdate((up) => !up);
        setOpenEdit((edit) => !edit);
      })
      .catch((err) => console.log(err));
  };

  const AllModelForThisBrand = model.map((item) => (
    <ModelCard
      key={item._id}
      {...item}
      setDeletModel={setDeletModel}
      setUpdatingModel={setUpdatingModel}
      setOpenEdit={setOpenEdit}
    />
  ));
  return (
    <>
      {openEdit ? (
        <FormModel handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : null}
      <div className="model_div">{AllModelForThisBrand}</div>
    </>
  );
};

export default AllModels;
