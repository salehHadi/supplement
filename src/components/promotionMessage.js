import React from "react";
import { MainText } from "../style/theme";
import { useMediaQuery, useTheme } from "@mui/material";

export default function PromotionMessage() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <img
        src="/public/assets/quotes.svg"
        alt="quote"
        width={matches ? "40px" : "60px"}
      />
      <MainText padding={matches ? "0 8px" : "0 240px"}>
        آهلا بصحتك الجيدة بغض النظر عن حالتك الحالية
      </MainText>
      <img
        src="/public/assets/people.svg"
        alt="quote"
        width={matches ? "270px" : "320px"}
      />
    </div>
  );
}
