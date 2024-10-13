export const ProjectLink = ({
  image,
  url,
  backgroundPosition,
  key,
}: {
  image: string;
  url: string;
  backgroundPosition: string;
  key: string;
}) => {
  return (
    <a href={url} target="_blank" key={key}>
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
