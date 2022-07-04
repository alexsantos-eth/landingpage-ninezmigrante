import React from "react";

const Slider = () => {
  return (
    <div
      className="container-wrapper-genially"
      style={{
        position: "relative",
        minHeight: "400px",
        maxWidth: "100%",
        width: "100%",
      }}
    >
      <video
        loop
        autoPlay
        playsInline
        muted="muted"
        className="loader-genially"
        width="80px"
        height="80px"
        style={{
          top: "45%",
          left: "50%",
          marginBottom: "10%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source
          src="https://static.genial.ly/resources/panel-loader-low.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div
        id="62c3340c611be00018bfaa73"
        className="genially-embed"
        style={{
          width: "100%",
          height: "auto",
          margin: "0px auto",
          position: "relative",
        }}
      ></div>
    </div>
  );
};

export default Slider;
