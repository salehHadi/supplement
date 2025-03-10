import { Box, styled, Typography } from "@mui/material";
import React from "react";

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  [theme.breakpoints.up("sm")]: {
    width: "95px",
    height: "95px",
  },
  [theme.breakpoints.up("md")]: {
    width: "110px",
    height: "110px",
  },
}));

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ImageContainer>
        <img src="/assets/logo.png" alt="logo" width="100%" height="100%" />
      </ImageContainer>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <Typography variant="h1">إستشارة مجانية</Typography>
        <Typography variant="h1" className="p-2 px-3 border rounded-pill">
          تسجيل الدخول
        </Typography>
      </div>
    </div>
  );
}
