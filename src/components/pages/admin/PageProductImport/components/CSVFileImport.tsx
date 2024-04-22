import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    console.log("uploadFile to", url);

    if (!file) {
      console.log("No file selected");
      return;
    }

    try {
      const response = await axios.get(url, {
        params: { name: encodeURIComponent(file.name) },
      });
      console.log("File to be uploaded: ", file.name);
      console.log("Uploading to: ", response.data.url);

      const uploadResult = await fetch(response.data.url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": "text/csv",
        },
      });

      if (uploadResult.ok) {
        console.log("Upload successful");
      } else {
        console.error("Upload failed:", await uploadResult.text());
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
