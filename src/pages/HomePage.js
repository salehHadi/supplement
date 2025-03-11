import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import ShortRivews from "../components/shortRivews";
import HeroSection from "../components/heroSection";
import OurPrograms from "../components/ourPrograms";
import ExplinationVideos from "../components/explinationVideos";
import PromotionMessage from "../components/promotionMessage";
import OurFeatures from "../components/ourFeatures";
import FullReivews from "../components/fullReivews";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import flower from "../assets/flower.svg";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        flexDirection: "column",
      }}
    >
      <Header />
      <ShortRivews />
      <HeroSection />
      <div>
        <img src={flower} alt="flower" width="35px" height="46px" />
      </div>
      <OurPrograms />

      <div>
        <img src={flower} alt="flower" width="35px" height="46px" />
      </div>
      <ExplinationVideos />
      <PromotionMessage />
      <OurFeatures />
      <FullReivews />
      <ContactUs />
      <Footer />
    </div>
  );
}
