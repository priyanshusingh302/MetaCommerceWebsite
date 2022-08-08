import React, { useRef, useEffect } from "react";

export default function CreateAvatar() {
  const [avatarUrl, setAvatarUrl] = React.useState("");
  const myContainer = useRef(null);

  function parse(event) {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  }

  function subscribe(event) {
    const json = parse(event);

    if (json?.source !== "readyplayerme") {
      return;
    }
    // Susbribe to all events sent from Ready Player Me once frame is ready
    if (json.eventName === "v1.frame.ready") {
      // console.log(myContainer.current);
      if (myContainer !== null) {
        if ("current" in myContainer) {
          myContainer.current.contentWindow.postMessage(
            JSON.stringify({
              target: "readyplayerme",
              type: "subscribe",
              eventName: "v1.**",
            }),
            "*"
          );
        }
      }

      // Get avatar GLB URL
      if (json.eventName === "v1.avatar.exported") {
        // console.log(`Avatar URL: ${json.data.url}`);
        setAvatarUrl(json.data.url);
      }

      // Get user id
      // if (json.eventName === "v1.user.set") {
      //   console.log(
      //     `User with id ${json.data.id} set: ${JSON.stringify(json)}`
      //   );
      // }
    }
  }
  React.useEffect(() => {
    window.addEventListener("message", subscribe);
    document.addEventListener("message", subscribe);
  }, [myContainer]);
  return (
    <>
      <iframe
        id="frame"
        ref={myContainer}
        class="frame"
        src="https://demo.readyplayer.me/avatar?frameApi"
        allow="camera *; microphone *"
        style={{ height: "91vh", width: "100%", marginTop: "4rem" }}
      ></iframe>
    </>
  );
}
