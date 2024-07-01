import useEmblaCarousel from "embla-carousel-react";
import carouselImg1 from "../assets/images/carouselImg1.jpeg";
import carouselImg2 from "../assets/images/carouselImg2.png";
import carouselImg3 from "../assets/images/carouselImg3.png";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden w-full h-full" ref={emblaRef}>
      <div className="flex">
        <div className="flex-none min-w-0 w-full">
          <img
            className="w-full h-full"
            src={carouselImg1}
            alt="carouselImg1"
          />
        </div>
        <div className="flex-none min-w-0 w-full">
          <img
            className="w-full h-full"
            src={carouselImg2}
            alt="carouselImg2"
          />
        </div>
        <div className="flex-none min-w-0 w-full">
          <img
            className="w-full h-full"
            src={carouselImg3}
            alt="carouselImg3"
          />
        </div>
      </div>
    </div>
  );
}
