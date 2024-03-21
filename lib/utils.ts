import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { type Camera, type Color } from "@/types/canvas";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const connectionIdToColor = (connectionId: number) => {
  const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

  return COLORS[connectionId % COLORS.length];
};

export const pointerEventToCanvasPoint = (
  e: React.PointerEvent,
  camera: Camera
) => ({
  x: Math.round(e.clientX) - camera.x,
  y: Math.round(e.clientY) - camera.y,
});

export const colorToCss = (color: Color) =>
  `#${color.r.toString(16).padStart(2, "0")}${color.g
    .toString(16)
    .padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
