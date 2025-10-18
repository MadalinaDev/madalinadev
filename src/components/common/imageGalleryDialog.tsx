"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogPortal,
  DialogClose,
} from "../ui/dialog";
import { ArrowUp, ArrowDown, X, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Lens } from "../ui/lens";

const ImageGalleryDialog = ({
  open,
  onOpenChange,
  images,
  title,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: { id: string; src: string }[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lensSize, setLensSize] = useState(150);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = listRef.current;
    if (container) {
      const child = container.children[currentIndex] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      setLensSize(window.innerWidth < 768 ? 100 : 150);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="mx-auto min-h-[80dvh] w-full p-4 md:min-w-5xl md:p-6 lg:min-w-7xl"
      >
        <DialogTitle className="mb-4 text-center text-lg font-semibold md:mb-6 md:text-xl">
          {title}
        </DialogTitle>

        <DialogClose asChild className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 rounded-full p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>

        <div className="relative sticky flex w-full flex-col gap-4 md:gap-6 lg:flex-row">
          <div className="hidden flex-col items-center gap-3 lg:flex">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={prevImage}
              size="sm"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
            <div
              ref={listRef}
              className="no-scrollbar flex max-h-[60dvh] flex-col gap-3 overflow-y-auto"
            >
              {images.map((i, index) => (
                <button
                  key={i.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`my-1 transition-all duration-200 ${
                    !(index === currentIndex) && "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={i.src}
                    alt={`Thumbnail ${index + 1}`}
                    className={`h-16 w-auto rounded object-contain ${index === currentIndex && "border-muted-foreground/30 border"}`}
                  />
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={nextImage}
              size="sm"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative flex flex-1 flex-col items-center justify-center">
            <div className="relative mb-4 flex w-full justify-center">
              <Lens
                zoomFactor={2}
                lensSize={lensSize}
                isStatic={false}
                ariaLabel="Zoom Area"
              >
                <img
                  src={images[currentIndex]?.src}
                  alt={images[currentIndex]?.src}
                  className="max-h-[50dvh] w-auto rounded-lg object-contain md:max-h-[60dvh]"
                />
              </Lens>
            </div>

            <div className="flex w-full justify-center md:hidden">
              <div className="flex items-center gap-4 md:gap-6">
                <Button
                  variant="outline"
                  className="hidden rounded-full lg:flex"
                  onClick={prevImage}
                  size="sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                <div className="flex max-w-full items-center gap-2 overflow-x-auto px-4 py-2 md:gap-3">
                  {images.map((i, index) => (
                    <button
                      key={i.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`flex-shrink-0 transition-all duration-200 ${
                        !(index === currentIndex) &&
                        "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={i.src}
                        alt={`Thumbnail ${index + 1}`}
                        className={`h-12 w-auto rounded object-contain md:h-16 ${index === currentIndex && "border-muted-foreground/30 border"}`}
                      />
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="hidden rounded-full lg:flex"
                  onClick={nextImage}
                  size="sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 flex w-full items-center justify-center gap-4 md:gap-6">
              <Button
                variant="outline"
                className="rounded-full lg:hidden"
                onClick={prevImage}
                size="sm"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>

              <span className="min-w-[60px] text-center text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>

              <Button
                variant="outline"
                className="rounded-full lg:hidden"
                onClick={nextImage}
                size="sm"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogPortal />
    </Dialog>
  );
};

export default ImageGalleryDialog;
