import React from "react";

export default function ViewVR() {
  const [imageURL, setImageURL] = React.useState(
    "https://media.sketchfab.com/models/fad88d036f764cceb3938549ca446c89/thumbnails/0cab2548554b4c28939899988fed4384/9bfdc97d96e745e2844986b561067bf7.jpeg"
  );
  React.useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("imageURL");
    setImageURL(product);
    console.log(product);
  });
  return (
    <a-scene>
      <a-assets>
        <img id="field" src={imageURL} />
        <a-mixin
          class="links"
          id="social"
          geometry="primitive: circle; radius: 0.09"
          material="color: #fff; transparent: true"
        ></a-mixin>
      </a-assets>
      <a-sky radius="10" src="#field"></a-sky>
      <a-entity
        camera="camera"
        look-controls="look-controls"
        wasd-controls="wasd-controls"
        position="0 2 1.8"
      >
        <a-cursor color="#FFF849" fuse="true"></a-cursor>
      </a-entity>
    </a-scene>
  );
}
