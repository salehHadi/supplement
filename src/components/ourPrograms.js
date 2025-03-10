import React from "react";
import { MainText } from "../style/theme";
import { Box, styled, Typography } from "@mui/material";

const CourseContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "45%",
  gap: "4px",
  marginBottom: "8px",
  [theme.breakpoints.up("md")]: {
    width: "35%",
    marginBottom: "16px",
  },
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "400px",
  fontSize: "20px",
  [theme.breakpoints.up("md")]: {
    fontSize: "28px",
  },
}));
const CourseDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
    padding: "0 16px",
  },
}));

export default function OurPrograms() {
  const courseDtailes = [
    {
      imgURL: "/assets/course1.png",
      title: "دورس تنظيف الكبد",
      description:
        "كورس متكامل لعلاج جميع مشاكل الكبد من تليفات، تراكم دهون الخ",
    },
    {
      imgURL: "/assets/course1.png",
      title: "دورس تنظيف الكبد",
      description:
        "كورس متكامل لعلاج جميع مشاكل الكبد من تليفات، تراكم دهون الخ",
    },
    {
      imgURL: "/assets/course1.png",
      title: "دورس تنظيف الكبد",
      description:
        "كورس متكامل لعلاج جميع مشاكل الكبد من تليفات، تراكم دهون الخ",
    },
    {
      imgURL: "/assets/course1.png",
      title: "دورس تنظيف الكبد",
      description:
        "كورس متكامل لعلاج جميع مشاكل الكبد من تليفات، تراكم دهون الخ",
    },
  ];
  return (
    <div className="d-flex flex-column gap-5 ">
      <MainText>تعرف برامجنا؟</MainText>
      <div className="d-flex flex-wrap justify-content-around gap-4">
        {courseDtailes.map((el) => (
          <CourseContainer>
            <div style={{ width: "100%" }}>
              <img
                src={el.imgURL}
                alt="course"
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            <CourseTitle>{el.title}</CourseTitle>
            <CourseDescription>{el.description}</CourseDescription>
          </CourseContainer>
        ))}
      </div>
    </div>
  );
}
