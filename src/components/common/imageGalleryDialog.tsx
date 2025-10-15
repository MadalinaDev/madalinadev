"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogPortal,
  DialogClose,
} from "../ui/dialog";
import { ArrowUp, ArrowDown, X } from "lucide-react";
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="min-h-[80%] min-w-7xl"
      >
        <DialogTitle className="text-md m-0 p-0 text-center">
          {title}
        </DialogTitle>

        <div className="relative my-0 flex flex-row gap-2 py-0">
          <div className="flex h-full max-h-[80vh] flex-col items-center gap-2">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setCurrentIndex(
                  (prev) => (prev - 1 + images.length) % images.length,
                );
              }}
            >
              <ArrowUp />
            </Button>
            <div
              ref={listRef}
              className="no-scrollbar flex max-h-[calc(80vh-4rem)] flex-col gap-4 overflow-y-auto"
            >
              {images.map((i, index) => (
                <img
                  key={i.id}
                  src={i.src}
                  alt={i.src}
                  className="my-8 h-20 w-auto object-contain"
                />
              ))}
            </div>

            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
              }}
            >
              <ArrowDown />
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.src}
                className="max-h-[80vh] w-auto object-contain"
              />
            </Lens>
          </div>
          <DialogClose asChild className="absolute -top-13 -right-2">
            <button>
              <X className="size-4 hover:cursor-pointer" />
            </button>
          </DialogClose>
        </div>
      </DialogContent>
      <DialogPortal />
    </Dialog>
  );
};

export default ImageGalleryDialog;
