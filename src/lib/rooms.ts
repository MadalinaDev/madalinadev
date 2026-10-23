import { type CSSProperties } from "react";

export type Wall = { hue: number; chroma: number };

export type Screen = {
  src: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
  // shown in the entrance strip next to the cover
  highlight?: boolean;
  // device pixel ratio of a phone capture; the viewer shows it at phone width
  scale?: number;
};

export type Project = {
  id: string;
  title: string;
  kind: string;
  description: string;
  medium: string[];
  features: string[];
  websiteLink: string;
  githubLink: string | null;
  wall: Wall;
  cover: Omit<Screen, "caption">;
  screens: Screen[];
};

// Wall paints as OKLCH hue + chroma; lightness is shared per theme in globals.css
export const walls = {
  entrance: { hue: 268, chroma: 0.073 },
  chronology: { hue: 162, chroma: 0.055 },
  study: { hue: 205, chroma: 0.043 },
} satisfies Record<string, Wall>;

export const roomStyle = ({ hue, chroma }: Wall) =>
  ({ "--room-h": hue, "--room-c": chroma }) as CSSProperties;

export const hostOf = (url: string) =>
  new URL(url).hostname.replace(/^www\./, "");

const COUNT_WORDS = [
  "No",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

export const screenCount = (count: number) =>
  `${COUNT_WORDS[count] ?? count} ${count === 1 ? "screen" : "screens"}`;
