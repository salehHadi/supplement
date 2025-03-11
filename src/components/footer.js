import React from "react";
import { Typography } from "@mui/material";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ width: "100%" }}
    >
      <img src={logo} alt="logo" width={"136px"} height={"136px"} />

      <Typography sx={{ opacity: 0.8 }} variant="h5">
        sasa97977s@hotmail.com
      </Typography>
    </div>
  );
}
