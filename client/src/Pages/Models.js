import React, { useState } from "react";
import AllModels from "../components/Allmodels/AllModels";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import AddNewModel from "../components/Allmodels/AddNewModel/AddNewModel";

const Models = (props) => {
  const idBrand = props.match.params.id;
  const [add, setAdd] = useState(false);
  const [modelsCrete, setModelsCrete] = useState(false);
  const handelAddNew = () => {
    setAdd((open) => !open);
  };

  return (
    <div>
      <div className="add_Icon">
        <IconButton onClick={handelAddNew}>
          <AddIcon fontSize="large" />
          <h3>Add</h3>
        </IconButton>
      </div>
      {add ? (
        <AddNewModel
          idBrand={idBrand}
          setAdd={setAdd}
          setModelsCrete={setModelsCrete}
        />
      ) : null}
      <AllModels idBrand={idBrand} modelsCrete={modelsCrete} />
    </div>
  );
};

export default Models;
