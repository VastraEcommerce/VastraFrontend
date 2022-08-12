import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { useRef, useState } from "react";

const Input = styled("input")({
  display: "none",
});

export function UploadButton() {
  const imgsRef = useRef();
  const [imgs, setImgs] = useState([]);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          ref={imgsRef}
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={() => {
            setImgs(imgsRef.current?.files);
          }}
        />

        <Button
          sx={{ height: "56px" }}
          startIcon={<PhotoCamera />}
          variant="contained"
          component="span"
        >
          Upload
        </Button>
      </label>
      <div>
        {/* {imgsRef.current?.files.map((file) => (
          <img src={file} />
        ))} */}
        <img src={imgs[0]} />
      </div>
    </Stack>
  );
}
