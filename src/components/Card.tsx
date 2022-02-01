import { FC, ReactChild, ReactNode, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: ReactChild | ReactNode;
  // - if type not after {} but after component's name;
  variant?: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
  const [state] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
