import React from "react";
import { useNavigate } from "react-router-dom";

const Quadrants = () => {
  const navigate = useNavigate();

  const handleImageClick = (imageName) => {
    switch (imageName) {
      case "Bio":
        navigate("/Bio");
        break;
      case "Hist":
        navigate("/Hist");
        break;
      case "Program":
        navigate("/Program");
        break;
      case "Math":
        navigate("/Maths");
        break;
      default:
        console.log("error");
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 2fr",
        gridTemplateRows: "2fr 2fr",
        height: "100vh",
        backgroundColor: "rgb(210, 210, 210)",
        gap: "10px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid rgb(60, 60, 60)",
        }}
      >
        <img
          src={require("./bio.jpeg")}
          alt="Bio"
          style={{ maxWidth: "50%", maxHeight: "50%", borderRadius: "50%" }}
          onClick={() => handleImageClick("Bio")}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid rgb(60, 60, 60)",
        }}
      >
        <img
          src={require("./hist.png")}
          alt="History"
          style={{ maxWidth: "50%", maxHeight: "50%", borderRadius: "50%" }}
          onClick={() => handleImageClick("Hist")}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid rgb(60, 60, 60)",
        }}
      >
        <img
          src={require("./prgm.png")}
          alt="Programming"
          style={{ maxWidth: "50%", maxHeight: "50%", borderRadius: "50%" }}
          onClick={() => handleImageClick("Program")}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid rgb(60, 60, 60)",
        }}
      >
        <img
          src={require("./math.png")}
          alt="Math"
          style={{ maxWidth: "50%", maxHeight: "50%", borderRadius: "50%" }}
          onClick={() => handleImageClick("Math")}
        />
      </div>
    </div>
  );
};

export default Quadrants;
