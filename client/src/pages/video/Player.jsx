const Player = ({link, title}) => {
  return (
    <div>
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
