import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios, { AxiosError } from "axios";

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

    const authorizationToken = localStorage.getItem("authorization_token");

    try {
      const response = await axios.get(url, {
        params: { name: encodeURIComponent(file.name) },
        headers: authorizationToken
          ? {
              Authorization: `Basic ${authorizationToken}`,
            }
          : {},
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
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          alert(
            "Error: Unauthorized (401). Please check your authorization token."
          );
        } else if (axiosError.response.status === 403) {
          alert(
            "Error: Forbidden (403). Please check your authorization permissions."
          );
        }
      } else {
        console.error("Error uploading file:", axiosError);
        alert(`Other error occurred: ${axiosError.message}`);
      }
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
