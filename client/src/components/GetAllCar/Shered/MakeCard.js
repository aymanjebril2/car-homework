import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

const useStyles = makeStyles({
  mainDiv: {
    marginTop: 100,
  },
  root: {
    width: 345,
    margin: 50,
  },
  imgDiv: {
    margin: 30,
  },
  img: {
    height: 200,
    width: 200,
    margin: "0 auto",
    borderRadius: "50%",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
  },
  eachIcon: {
    margin: 15,
  },
});

const MakeCard = ({
  _id,
  title,
  img,
  link,
  setDeletBrand,
  setUpdatingBrand,
  setAdd,
  setOpenEdit,
}) => {
  const deletingBrand = async () => {
    await axios({
      url: `/api/Brands/${_id}`,
      method: "DELETE",
    }).then((res) => console.log(res));
    setDeletBrand((deleting) => !deleting);
  };
  const updatingbrand = async () => {
    const response = await axios.get(`/api/brands/${_id}`);
    setUpdatingBrand(response.data);

    setOpenEdit((open) => !open);
  };
  const classes = useStyles();
  return (
    <div key={_id} className={classes.mainDiv}>
      <div className={classes.imgDiv}>
        <Link to={`/${title}/${_id}`}>
          <img src={img} alt={title} className={classes.img} />
        </Link>
        <a href={link} className={classes.link}>
          <h2 className={classes.title}> {title}</h2>
        </a>
        <div className={classes.icon}>
          <div className={classes.eachIcon}>
            <IconButton onClick={updatingbrand}>
              <EditIcon style={{ color: "blue" }} />
            </IconButton>
          </div>
          <div className={classes.eachIcon}>
            <IconButton onClick={deletingBrand}>
              <DeleteIcon style={{ color: "red" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeCard;
