import React, { useState } from "react";
import { MainText } from "../style/theme";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SecondText = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  opacity: "0.8",

  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));

const Line = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: " center",
  justifyContent: "center",
  height: "100px",
  width: "1px",
  backgroundColor: "white",
}));

const WhatsAppContainer = styled(Box)(({ theme }) => ({
  padding: "4px 8px",
  backgroundColor: "#6CFA59",
  borderRadius: "8px",
  cursor: "pointer",
  ":hover": {
    opacity: "0.9",
  },
}));

const ShowMessage = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: -25,
  right: 50,
  fontSize: "10px",
  padding: "4px",
  borderRadius: "4px",
  fontWeight: "bold",
  backgroundColor: "white",
  color: "black",
  display: "inline-block",
}));
export default function ContactUs() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = (text) => {
    setIsHovered(false);
    setIsClicked(true);
    navigator.clipboard.writeText(text).then(() => {
      setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    });
  };

  return (
    <div
      style={{ direction: "rtl", width: "100%", marginBottom: "40px" }}
      className="d-flex flex-column justify-content-center align-items-center gap-4"
    >
      <div>
        <MainText>عزز صحتك الآن .. </MainText>
        <SecondText>سارع باستغلال خدمة الاستشارات المجانية .. </SecondText>
      </div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ width: "100%", gap: matches ? "10%" : "10%" }}
      >
        <div className="d-flex flex-column justify-content-start align-items-center gap-2">
          <Typography variant="h4">المحادثة الفورية</Typography>
          <a
            style={{
              textDecoration: "none",
            }}
            href={
              matches
                ? "https://web.whatsapp.com/send?phone=966576670375"
                : "https://wa.me/+9660576638198"
            }
            target="_blenk"
          >
            <WhatsAppContainer className="d-flex justify-content-start align-items-center gap-1">
              <Typography variant="h4" color={"black"}>
                واتس آب
              </Typography>
              <img src="/assets/whatsapp.svg" alt="whatsApp" />
            </WhatsAppContainer>
          </a>
        </div>
        <Line />
        <div className="d-flex flex-column justify-content-start align-items-center gap-2">
          <Typography variant="h4">الاتصال المباشر</Typography>
          <Box
            sx={{ direction: "ltr", cursor: "pointer", position: "relative" }}
            onClick={() => handleCopy("+966576638198")}
            onMouseEnter={() => setIsHovered(true)} // Set state to true on hover
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && <ShowMessage>اضغط للنسخ</ShowMessage>}
            {isClicked && <ShowMessage>تم النسخ</ShowMessage>}
            <Typography variant="h4">+966 57 663 8198</Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}
