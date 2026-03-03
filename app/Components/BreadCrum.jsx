import React from "react";

const BreadCrum = ({ title, backgroundImage, path }) => {
  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingLeft: "8%",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))",
        }}
      />

      <div style={{ color: "#fff", zIndex: 2 }}>
        <p style={{ display: "flex", gap: "10px", fontSize: "15px" }}>
          {path?.map((item, index) => (
            <span key={index}>
              {item}
              {index !== path.length - 1 && <span> › </span>}
            </span>
          ))}
        </p>

        <h1 style={{ fontSize: "48px", marginTop: "10px" }}>{title}</h1>
      </div>
    </div>
  );
};

export default BreadCrum;