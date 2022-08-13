import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Divider, Button, Stack, Box } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import DeleteIcon from "@mui/icons-material/Delete";
// import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

// import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

// const Button = styled(MuiButton)({
//   height: "56px",
// });

const ImageUpload = ({ values, i, setImagesState }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 5;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    imageList.forEach((image) => {
      const ext = image.file.name.split(".").at(-1);
      const imgUuid = `${uuidv4()}.${ext}`;
      image.file.uuid = imgUuid;
      values.variants[i].images = [
        ...values.variants[i].images,
        `images/products/${imgUuid}`,
      ];
    });

    console.log(imageList, addUpdateIndex);
    setImagesState((prevState) => [
      ...prevState,
      ...imageList.map((image) => image.file),
    ]);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png", "jpeg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div>
            <Button
              fullWidth
              sx={{
                height: "100px",
              }}
              variant="contained"
              component="span"
              startIcon={<PhotoCamera />}
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>

            <Button
              sx={{
                my: 1,
              }}
              className="bg-red-600"
              component="span"
              variant="contained"
              onClick={() => {
                values.variants[i].images = [];
                onImageRemoveAll();
              }}
            >
              <DeleteIcon /> Remove all images
            </Button>

            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              {imageList.map((image, index) => (
                <Box flex={1} key={index}>
                  <Box
                    sx={{
                      height: "200px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                      src={image.data_url}
                      alt=""
                    />
                  </Box>

                  <div className="flex justify-between">
                    <Button
                      sx={{
                        mt: 1,
                      }}
                      className="btn-warning"
                      component="span"
                      variant="contained"
                      onClick={() => onImageUpdate(index)}
                    >
                      <UpgradeIcon />
                    </Button>
                    <Button
                      sx={{
                        mt: 1,
                      }}
                      className="bg-red-600"
                      component="span"
                      variant="contained"
                      onClick={() => {
                        values.variants[i].images = values.variants[
                          i
                        ].images.filter((imgId) => imgId !== image.file.uuid);
                        onImageRemove(index);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                </Box>
              ))}
            </Stack>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUpload;
