import { ReactNode } from "react";

export interface CardInterface {
  headerText: string;
  className?: string;
  classNameButton?: string;
  description?: string;
  textButton?: string;
  buttonIcon?: ReactNode;
}
