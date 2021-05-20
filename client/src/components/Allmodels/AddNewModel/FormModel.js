import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  root: {
    marginTop: 50,
    width: 500,
    margin: "0 auto",
    // height: 500,
  },
  titleOfCard: {
    textAlign: "center",
  },
  inputDiv: {
    textAlign: "center",
    margin: "0 auto",
  },
  input: {
    width: 300,
    margin: 10,
  },
  btnDiv: {
    textAlign: "center",
    margin: "0 auto",
  },
  btn: {
    backgroundColor: "#282c34",
    marginTop: 20,
    color: "white",
  },
});

const FormModel = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card style={{ height: 400 }}>
        <form onSubmit={handleSubmit}>
          <h3 className={classes.titleOfCard}> Add New Make</h3>
          <div className={classes.inputDiv}>
            <TextField
              id="outlined-basic"
              label="name"
              variant="outlined"
              className={classes.input}
              onChange={handleChange}
              name="name"
            />
            <div>
              <TextField
                id="outlined-select-currency"
                label="type"
                onChange={handleChange}
                variant="outlined"
                className={classes.input}
                name="type"
              />

              <TextField
                id="outlined-basic"
                label="image Link "
                variant="outlined"
                className={classes.input}
                name="picturelink"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={classes.btnDiv}>
            <Button type="submit" variant="contained" className={classes.btn}>
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FormModel;
