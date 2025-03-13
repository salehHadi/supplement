import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery, useTheme } from "@mui/material";

export default function VideoPlayer() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div
      style={{
        padding: matches ? "20px" : "10px",
        border: "1px solid white",
        maxWidth: "900px",
        width: "100%",
      }}
    >
      <ReactPlayer
        url={"https://youtu.be/hcvWGabOtzU?si=XsxsQ6qEOHkMkQZe"} // Pass the path to the local video here
        controls={true} // Adds play/pause, volume, etc.
        width={"100%"}
        height={matches ? "450px" : "250px"}
      />
    </div>
  );
}
