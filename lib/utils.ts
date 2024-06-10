import { type ClassValue, clsx } from "clsx";
import { Currency } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const transformBoolean = (data: boolean) => {
  if (data === true) return "Sim";
  return "Não";
};

