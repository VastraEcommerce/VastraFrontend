import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Divider, Button as MuiButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

import Textfield from './FormsUI/Textfield';
import ButtonSubmit from './FormsUI/Button';
import Colorfield from './FormsUI/Colorfield';
import ImageUpload from './FormsUI/ImageUpload';

import {
  useAddProductMutation,
  useUploadProductImagesMutation,
} from '../services/productApi';
import { useState } from 'react';
import { ValidationError } from 'yup';

const size = { size: '', count: '', price: '' };
const variant = {
  color: '#000000',
  sizes: [{ ...size }],
  images: [],
};

const Button = styled(MuiButton)({
  height: '56px',
});

const INITIAL_FORM_STATE = {
  brand: '',
  title: '',
  category: '',
  description: '',
  variants: [
    {
      ...variant,
    },
  ],
};

const FORM_VALIDATION = Yup.object().shape({
  brand: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  variants: Yup.array(
    Yup.object({
      color: Yup.string().required('Required'),
      sizes: Yup.array(
        Yup.object({
          size: Yup.string().required('Required'),
          count: Yup.number()
            .integer()
            .typeError('Please enter a valid price')
            .required('Required'),
          price: Yup.number()
            .integer()
            .typeError('Please enter a valid price')
            .required('Required'),
        })
      )
        .min(1)
        .test((sizes) => {
          sizes = sizes.map((size) => size.size?.toLocaleLowerCase());
          const hasDuplicates = (arr) => arr.length !== new Set(arr).size;

          if (hasDuplicates(sizes)) {
            return new ValidationError(
              'Sizes must be unique',
              undefined,
              'sizes'
            );
          }

          return true;
        }),
      images: Yup.array(Yup.string()).min(1),
    })
  ).min(1),
});

const AddProduct = () => {
  const [uploadImages] = useUploadProductImagesMutation();
  const [addProduct] = useAddProductMutation();

  const [images, setImages] = useState();
  return (
    <Grid
      container
      sx={{
        py: 4,
      }}
    >
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={async (values) => {
              const fd = new FormData();

              images.forEach((image) => {
                fd.append('images', image, image.uuid);
              });
              try {
                await uploadImages(fd);
                await addProduct({ ...values });
              } catch (error) {}
            }}
          >
            {({ values, errors }) => (
              <Form>
                <pre>{JSON.stringify({ values, errors }, undefined, 2)}</pre>
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
                    <FieldArray name="variants">
                      {({ push, remove }) => (
                        <Grid container spacing={2}>
                          {values.variants.map((variant, i) => (
                            <Grid item xs={12} key={i}>
                              <Grid container spacing={2}>
                                <Grid item xs={4}>
                                  <Colorfield
                                    name={`variants[${i}].color`}
                                    label="Color"
                                    helperText={values.variants[i].color}
                                  />
                                </Grid>
                                <Grid item>
                                  <Button
                                    size="large"
                                    className=" bg-red-600"
                                    color="error"
                                    variant="contained"
                                    disabled={i === 0}
                                    onClick={() => remove(i)}
                                    startIcon={<DeleteIcon />}
                                  >
                                    Remove Variant
                                  </Button>
                                </Grid>
                                <Grid item xs={12}>
                                  <ImageUpload
                                    values={values}
                                    i={i}
                                    setImagesState={setImages}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                  <FieldArray name={`variants[${i}].sizes`}>
                                    {({ push, remove }) => (
                                      <Grid container spacing={2}>
                                        {variant.sizes.map((size, j) => (
                                          <Grid key={j} item xs={12}>
                                            <VariantSize
                                              j={j}
                                              i={i}
                                              remove={remove}
                                              push={push}
                                            />
                                          </Grid>
                                        ))}
                                        <Grid item xs={12}>
                                          <Grid
                                            container
                                            spacing={2}
                                            sx={{ alignItems: 'center' }}
                                          >
                                            <Grid item>
                                              <Button
                                                className="btn btn-success"
                                                color="error"
                                                variant="contained"
                                                onClick={() => push(size)}
                                              >
                                                Add Size
                                              </Button>
                                            </Grid>

                                            <Grid item>
                                              {typeof errors.sizes ===
                                              'string' ? (
                                                <Typography color="red">
                                                  {errors.sizes}
                                                </Typography>
                                              ) : null}
                                            </Grid>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    )}
                                  </FieldArray>
                                </Grid>
                                <Grid item xs={12}>
                                  <Divider
                                    orientation="horizontal"
                                    flexItem
                                    sx={{ my: 1 }}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          ))}

                          <Grid item xs={12}>
                            <Button
                              className="btn"
                              color="error"
                              variant="contained"
                              onClick={() => push(variant)}
                            >
                              Add Variant
                            </Button>
                          </Grid>
                        </Grid>
                      )}
                    </FieldArray>
                  </Grid>

                  <Grid item xs={12}>
                    <ButtonSubmit>Submit Form</ButtonSubmit>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AddProduct;

function VariantSize({ j, i, remove }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item flex={1}>
          <Textfield name={`variants.${i}.sizes.${j}.size`} label="Size" />
        </Grid>
        <Grid item flex={1}>
          <Textfield name={`variants.${i}.sizes.${j}.count`} label="Stock" />
        </Grid>
        <Grid item flex={1}>
          <Textfield name={`variants.${i}.sizes.${j}.price`} label="Price" />
        </Grid>
        <Grid item>
          <Button
            fullWidth
            className="bg-red-600"
            color="error"
            variant="contained"
            disabled={j === 0}
            onClick={() => remove(j)}
          >
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
