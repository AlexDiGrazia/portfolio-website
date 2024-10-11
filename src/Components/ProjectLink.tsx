export const ProjectLink = ({
  image,
  url,
  backgroundPosition,
}: {
  image: string;
  url: string;
  backgroundPosition: string;
}) => {
  return (
    <a href={url} target="_blank">
      <div
        className="image-frame"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition,
        }}
      ></div>
    </a>
  );
};
