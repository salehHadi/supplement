import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery, useTheme } from "@mui/material";

export default function VideoPlayer() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div
      // style={{
      //   padding: matches ? "20px" : "10px",
      //   border: "1px solid white",
      //   maxWidth: "100%",
      //   // width: "100%",
      // }}
      style={{
        paddingTop: "56.25%",
        marginTop: matches ? "-78.25%" : "-135.25%",
        marginBottom: matches ? "-40px" : "-100.25%",
        width: matches ? "50vw" : "90vw" /* 16:9 ratio */,
      }}
    >
      <ReactPlayer
        url="https://home.wistia.com/medias/myqh8mq63t"
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}
