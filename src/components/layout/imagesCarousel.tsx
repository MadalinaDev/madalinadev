"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const ImagesCarousel = ({
  images,
}: {
  images: { id: string; src: string }[];
}) => {
  const autoplayPlugin = Autoplay({
    delay: 6200,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
    stopOnLastSnap: false,
  });

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const handleDotClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <div className="relative flex-2">
      <Carousel
        className="relative mx-8 flex-2"
        plugins={[autoplayPlugin]}
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {images.map((i, idx) => (
            <CarouselItem key={i.id}>
              <div className="animate-scroll-vertical relative h-[400px] w-full overflow-visible">
                <Image
                  src={i.src}
                  alt={`Project image ${i.id}`}
                  fill
                  className="overflow-visible object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full transition-colors hover:cursor-pointer ${
              idx === activeIndex ? "bg-foreground" : "bg-foreground/20"
            }`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesCarousel;
