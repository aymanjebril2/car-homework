import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 50,
  },
  img: {
    objectFit: "inherit",
    width: "100%",
  },
});

const ModelCard = ({
  _id,
  name,
  picturelink,
  type,
  setDeletModel,
  setOpenEdit,
  setUpdatingModel,
}) => {
  const classes = useStyles();

  const deletingModels = async () => {
    await axios({
      url: `/api/model/${_id}`,
      method: "DELETE",
    }).then((res) => console.log(res));
    setDeletModel((deleting) => !deleting);
  };
  const updatingModel = async () => {
    const response = await axios.get(`/api/model/${_id}`);
    setUpdatingModel(response.data);

    setOpenEdit((open) => !open);
  };
  return (
    <Card className={classes.root} key={_id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name ? name : ""}
          height="140"
          src={picturelink ? picturelink : ""}
          title="Contemplative Reptile"
          className={classes.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name ? name : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {type ? type : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={updatingModel}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={deletingModels}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ModelCard;
