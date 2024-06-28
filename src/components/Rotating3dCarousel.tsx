import rotatingImage1 from "../assets/images/rotatingImage1.jpg";
import ComicFrame from "./ui/CarouselComicFrame";

const Carousel: React.FC = () => {
  return (
    <div className="relative overflow-hidden text-center h-screen w-full">
      <div
        className="absolute w-28 h-36 top-2/10 animate-autoRotate"
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(40rem)",
          zIndex: 2,
          left: "calc(50% - 5rem)",
        }}
      >
        <ComicFrame src={rotatingImage1} alt="img" pos={0} />
        <ComicFrame src={rotatingImage1} alt="img" pos={1} />
        <ComicFrame src={rotatingImage1} alt="img" pos={2} />
        <ComicFrame src={rotatingImage1} alt="img" pos={3} />
        <ComicFrame src={rotatingImage1} alt="img" pos={4} />
        <ComicFrame src={rotatingImage1} alt="img" pos={5} />
        <ComicFrame src={rotatingImage1} alt="img" pos={6} />
        <ComicFrame src={rotatingImage1} alt="img" pos={7} />
      </div>
      <div></div>
    </div>
  );
};

export default Carousel;
