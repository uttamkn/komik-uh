import rotatingImage1 from "../assets/images/rotatingImage1.jpg";
import ComicCard from "./ui/CarouselComicCard";

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
        <ComicCard src={rotatingImage1} alt="img" pos={0} />
        <ComicCard src={rotatingImage1} alt="img" pos={1} />
        <ComicCard src={rotatingImage1} alt="img" pos={2} />
        <ComicCard src={rotatingImage1} alt="img" pos={3} />
        <ComicCard src={rotatingImage1} alt="img" pos={4} />
        <ComicCard src={rotatingImage1} alt="img" pos={5} />
        <ComicCard src={rotatingImage1} alt="img" pos={6} />
        <ComicCard src={rotatingImage1} alt="img" pos={7} />
      </div>
      <div></div>
    </div>
  );
};

export default Carousel;
