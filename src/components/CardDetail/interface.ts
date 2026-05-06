import { ReactNode } from "react";

export interface CardDetailInterface {
  title: string;
  levelDetail?: string;
  interestNumber?: number;
  rate: number;
  image: ReactNode;
  disable?: boolean;
  buttonTitle?: string;
  className?: string;
}
