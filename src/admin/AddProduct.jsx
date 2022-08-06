import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { makeStyles } from "@mui/material/core/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Textfield from "./FormsUI/Textfield";
// import Button from "./FormsUI/Button";
import Color from "./FormsUI/Color";
import Colorfield from "./FormsUI/Colorfield";
import { Button, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const INITIAL_FORM_STATE = {
  brand: "",
  title: "",
  category: "",
  description: "",
  brandThumbnail: "",
};

const FORM_VALIDATION = Yup.object().shape({
  brand: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  brandThumbnail: Yup.string().required("Required"),
  price: Yup.number()
    .integer()
    .typeError("Please enter a valid price")
    .required("Required"),
});

const AddProduct = () => {
  return (
    <Grid
      container
      sx={{
        py: 4,
      }}
    >
      <Grid item xs={12}>
        <Container maxWidth="md">
          {/* <div className={classes.formWrapper}> */}
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Product details</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="brand" label="Brand" />
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="title" label="Title" />
                </Grid>

                <Grid item xs={12}>
                  <Textfield
                    multiline
                    rows={4}
                    name="description"
                    label="Description"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Textfield name="category" label="Category" />
                </Grid>

                <Grid item xs={12}>
                  <Divider orientation="horizontal" flexItem sx={{ my: 1 }} />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Variants details</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Colorfield name="color" label="Color" />
                  {/* <Color name="color" label="Color" /> */}
                </Grid>

                <VariantSize />
                <VariantSize />
                <VariantSize />
                <Grid item xs={12}>
                  <Button
                    className="btn btn-success"
                    color="error"
                    variant="contained"
                  >
                    Add Size
                  </Button>
                </Grid>
                <UploadButtons />

                {/* <Grid item xs={12}>
                  <Button>Submit Form</Button>
                </Grid> */}
              </Grid>
            </Form>
          </Formik>
          {/* </div> */}
        </Container>
      </Grid>
    </Grid>
  );
};

export default AddProduct;

const Input = styled("input")({
  display: "none",
});

export function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />

        <Button
          startIcon={<PhotoCamera />}
          variant="contained"
          component="span"
        >
          Upload
        </Button>
      </label>
    </Stack>
  );
}

function VariantSize({}) {
  return (
    <>
      {" "}
      <Grid item xs={4}>
        <Textfield name="size" label="Size" />
      </Grid>
      <Grid item xs={4}>
        <Textfield name="count" label="Stock" />
      </Grid>
      <Grid item xs={3}>
        <Textfield name="price" label="Price" />
      </Grid>
      <Grid item xs={1}>
        <Button className="btn bg-red-600" color="error" variant="contained">
          <DeleteIcon />
        </Button>
      </Grid>
    </>
  );
}
