"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { hostOf, roomStyle, type Project } from "@/lib/rooms";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogPortal,
  DialogTitle,
} from "../ui/dialog";

const iconButton =
  "inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-vinyl/10 [&_svg]:size-5";

const ImageGalleryDialog = ({
  project,
  index,
  onIndexChange,
}: {
  project: Project;
  index: number | null;
  onIndexChange: (index: number | null) => void;
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const count = project.screens.length;
  const current = index ?? 0;
  const screen = project.screens[current];

  // --- every screen starts from the top of its page ---
  useEffect(() => {
    frameRef.current?.scrollTo({ top: 0 });
  }, [current]);

  const go = (step: number) => onIndexChange((current + step + count) % count);

  return (
    <Dialog
      open={index !== null}
      onOpenChange={(open) => !open && onIndexChange(null)}
    >
      <DialogPortal>
        <DialogPrimitive.Content
          className="viewing-room data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 flex flex-col duration-300 outline-none"
          style={roomStyle(project.wall)}
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            // there is no DialogTrigger, so remember what opened the room
            if (document.activeElement instanceof HTMLElement) {
              openerRef.current = document.activeElement;
            }
            frameRef.current?.focus();
          }}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            openerRef.current?.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-10">
            <div className="min-w-0">
              <DialogTitle className="truncate text-xl font-bold tracking-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-caption text-vinyl-muted tabular-nums">
                {screen?.caption} · {current + 1} of {count}
              </DialogDescription>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noreferrer"
                className="text-caption mr-3 hidden items-center gap-0.5 underline decoration-1 underline-offset-[0.22em] hover:decoration-2 md:inline-flex"
              >
                Visit {hostOf(project.websiteLink)}
                <ArrowUpRight aria-hidden className="size-3.5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className={iconButton}
                  >
                    <ArrowLeft aria-hidden />
                    <span className="sr-only">Previous screen</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className={iconButton}
                  >
                    <ArrowRight aria-hidden />
                    <span className="sr-only">Next screen</span>
                  </button>
                </>
              )}
              <DialogClose className={iconButton}>
                <X aria-hidden />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 gap-8 px-5 pb-5 md:px-10 md:pb-10">
            {count > 1 && (
              <ol
                aria-label="Screens"
                className="hidden w-32 shrink-0 flex-col gap-5 overflow-y-auto p-1 lg:flex"
              >
                {project.screens.map((item, i) => (
                  <li key={item.src}>
                    <button
                      type="button"
                      onClick={() => onIndexChange(i)}
                      aria-current={i === current ? "true" : undefined}
                      className="group block w-full cursor-pointer text-left"
                    >
                      <span
                        className={cn(
                          "relative block aspect-[4/5] overflow-hidden bg-white outline-offset-2 transition-opacity",
                          i === current
                            ? "outline-vinyl outline-2"
                            : "opacity-65 group-hover:opacity-100",
                        )}
                      >
                        <Image
                          src={item.src}
                          alt=""
                          fill
                          sizes="8rem"
                          className="object-cover object-top"
                        />
                      </span>
                      <span className="mt-2 block text-sm">{item.caption}</span>
                    </button>
                  </li>
                ))}
              </ol>
            )}
            {screen && (
              <div
                ref={frameRef}
                tabIndex={0}
                aria-label={`${screen.caption}, scroll to read the whole page`}
                className="hang mx-auto h-full w-full max-w-[70rem] overflow-y-auto overscroll-contain bg-white"
                style={
                  screen.scale
                    ? { maxWidth: screen.width / screen.scale }
                    : undefined
                }
              >
                <Image
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes={
                    screen.scale
                      ? `${screen.width / screen.scale}px`
                      : "(min-width: 1280px) 70rem, 100vw"
                  }
                  className="block h-auto w-full"
                />
              </div>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default ImageGalleryDialog;
