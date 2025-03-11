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
        maxWidth: "860px",
      }}
    >
      <ReactPlayer
        url={"https://youtu.be/Vm8wjI3g2gU?si=ByQFYK0Eq7sf7GNQ"} // Pass the path to the local video here
        controls={true} // Adds play/pause, volume, etc.
        width={matches ? "550px" : "300px"} // Make the player responsive
        height={matches ? "550px" : "300px"} // Make the player responsive
      />
    </div>
  );
}
