import React from "react";
import ReactPlayer from "react-player";

import introVideo from "../videos/introVideo1.mp4";
import { useMediaQuery, useTheme } from "@mui/material";

export default function VideoPlayer() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div
      style={{
        padding: matches ? "20px" : "10px",
        border: "1px solid white",
        maxWidth: "860px",
      }}
    >
      <ReactPlayer
        url={introVideo} // Pass the path to the local video here
        controls={true} // Adds play/pause, volume, etc.
        width="100%" // Make the player responsive
        height="auto" // Adjust height automatically
      />
    </div>
  );
}
