import React from "react";

const MusicModalContent = () => {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/album/5t78IIG7tiWQ9RUYApAJFG?utm_source=generator"
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
