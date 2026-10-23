"use client";

import { useEffect } from "react";

type Paint = { h: number; c: number };

// olive and khaki hues read as mud at wall lightness, so blends route around them
const passesMud = (from: number, turn: number) => {
  for (let step = 1; step < 12; step++) {
    const hue = (((from + (turn * step) / 12) % 360) + 360) % 360;
    if (hue > 60 && hue < 140) return true;
  }
  return false;
};

// blend two wall paints, turning the hue the short way round unless that passes mud
const mix = (a: Paint, b: Paint, t: number): Paint => {
  let turn = ((b.h - a.h + 540) % 360) - 180;
  const long = turn > 0 ? turn - 360 : turn + 360;
  if (passesMud(a.h, turn) && !passesMud(a.h, long)) turn = long;
  return { h: (a.h + turn * t + 360) % 360, c: a.c + (b.c - a.c) * t };
};

// --- the wall follows the scroll: each room's paint blends into the next over
// --- about two thirds of a viewport, sampled at the top, middle and bottom ---
const WallPainter = () => {
  useEffect(() => {
    const root = document.documentElement;
    const rooms = Array.from(
      document.querySelectorAll<HTMLElement>("[data-room]"),
    );
    if (rooms.length === 0) return;
    const paints = rooms.map((room) => ({
      h: parseFloat(room.style.getPropertyValue("--room-h")),
      c: parseFloat(room.style.getPropertyValue("--room-c")),
    }));

    const sample = (rects: DOMRect[], y: number, zone: number) => {
      let i = rects.findIndex((rect) => rect.bottom > y);
      if (i === -1) i = rects.length - 1;
      const rect = rects[i];
      const current = paints[i];
      if (!rect || !current) return paints[0];
      const next = paints[i + 1];
      const previous = paints[i - 1];
      if (next && rect.bottom - y < zone) {
        return mix(current, next, 0.5 * (1 - (rect.bottom - y) / zone));
      }
      if (previous && y - rect.top < zone) {
        return mix(previous, current, 0.5 + (0.5 * (y - rect.top)) / zone);
      }
      return current;
    };

    const set = (name: string, paint: Paint | undefined) => {
      if (!paint) return;
      root.style.setProperty(`--${name}-h`, paint.h.toFixed(1));
      root.style.setProperty(`--${name}-c`, paint.c.toFixed(4));
    };

    let frame = 0;
    const paint = () => {
      frame = 0;
      const rects = rooms.map((room) => room.getBoundingClientRect());
      const height = window.innerHeight;
      const zone = height * 0.35;
      set("top", sample(rects, 0, zone));
      set("live", sample(rects, height / 2, zone));
      set("bottom", sample(rects, height, zone));
    };
    const schedule = () => {
      frame ||= requestAnimationFrame(paint);
    };

    // start on the rooms already in view, without a fade
    root.classList.add("walls-settling");
    paint();
    root.dataset.walls = "live";
    const settle = requestAnimationFrame(() =>
      requestAnimationFrame(() => root.classList.remove("walls-settling")),
    );

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(settle);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resize.disconnect();
      delete root.dataset.walls;
    };
  }, []);

  return <div aria-hidden className="wall-wash" />;
};

export default WallPainter;
