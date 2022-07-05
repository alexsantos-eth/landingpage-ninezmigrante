import React from "react";

const Slider = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          paddingTop: 0,
          height: 0,
        }}
      >
        <iframe
          frameBorder="0"
          width="1200"
          height="675"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src="https://view.genial.ly/62c344eb1ff29b0012353710"
          type="text/html"
          allowscriptaccess="always"
          allowFullScreen
          scrolling="yes"
          allownetworking="all"
        ></iframe>
      </div>
    </div>
  );
};

export default Slider;
