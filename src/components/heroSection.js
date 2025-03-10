import { styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import VideoPlayer from "./videoPlayer";
import { MainText } from "../style/theme";

const ActionText = styled(Typography)(({ theme }) => ({
  color: "black",
  backgroundColor: "white",
  padding: "10px",
}));
export default function HeroSection() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className="d-flex flex-column justify-content-start align-items-center gap-5">
      <MainText>صحة كاملة، بتغذية طبيعية آمنة</MainText>

      {/* section */}
      <div
        className={`d-flex justify-content-center align-items-center ${
          matches ? "gap-5" : "gap-3"
        }`}
      >
        <div
          className={`d-flex justify-content-center align-items-center ${
            matches ? "gap-2" : "gap-1"
          }`}
        >
          <img src="/assets/icon1.svg" alt="icon" />
          <Typography variant="h2" textAlign={"center"}>
            اساليب تغذية آمنه
          </Typography>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-1">
          <img src="/assets/icon2.svg" alt="icon" />
          <Typography variant="h2" textAlign={"center"}>
            %منتجات طبيعية 100
          </Typography>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-1">
          <img src="/assets/icon3.svg" alt="icon" />
          <Typography variant="h2" textAlign={"center"}>
            متابعة مستمرة
          </Typography>
        </div>
      </div>

      {/* section */}
      <div
        className={`d-flex justify-content-center align-items-center ${
          matches ? "gap-5" : "gap-4"
        }`}
      >
        <ActionText>إستشارة مجانية</ActionText>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <Typography maxWidth={"150px"} textAlign={"center"} fontSize={"14px"}>
            إنضم لاكثر من 20+ عميل سعيد
          </Typography>
          <img src="/assets/customers.png" alt="customer" />
        </div>
      </div>

      {/* section */}
      <div>
        <VideoPlayer />
      </div>
    </div>
  );
}
