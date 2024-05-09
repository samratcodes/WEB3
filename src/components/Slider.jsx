import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Realstate_1 from "../assets/Realstate_1.jpg";
import Realstate_2 from "../assets/Realstate_2.jpg";
import Realstate_3 from "../assets/Realstate_3.jpg";
import Realstate_4 from "../assets/Realstate_4.jpg";
import Realstate_5 from "../assets/Realstate_5.jpg";
import Realstate_6 from "../assets/Realstate_6.jpg";
import Realstate_7 from "../assets/Realstate_7.jpg";
import Realstate_8 from "../assets/Realstate_8.jpg";

const sliderImg = [
  Realstate_1,
  Realstate_2,
  Realstate_3,
  Realstate_4,
  Realstate_5,
  Realstate_6,
  Realstate_7,
  Realstate_8,
];

export function Slider() {
  return (
    <Carousel className="w-full max-w-[1300px]  mx-auto mt-2 p-2 ">
      <CarouselContent>
        {sliderImg.map((item, index) => (
          <CarouselItem key={index}>
            <div className="flex max-h-[600px] ">
              <img src={item} alt="img" className=" " />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
