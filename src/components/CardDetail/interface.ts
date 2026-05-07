import { ReactNode } from "react";

export interface CardDetailInterface {
  title: string;
  levelDetail?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  interestNumber?: number;
  rate: number;
  image: ReactNode;
  disable?: boolean;
  buttonTitle?: string;
  className?: string;
}
