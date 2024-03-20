import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const connectionIdToColor = (connectionId: number) => {
  const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

  return COLORS[connectionId % COLORS.length];
};
