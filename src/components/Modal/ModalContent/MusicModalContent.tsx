import React from "react";

const MusicModalContent = () => {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1IPOOk?utm_source=generator&theme=0"
      width="100%"
      height="512"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="w-[352px] "
    ></iframe>
  );
};

export default MusicModalContent;
