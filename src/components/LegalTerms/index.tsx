import React from "react";
import { twMerge } from "tailwind-merge";
import { CommonProps } from "@/types";

export const SubTitle: React.FC<CommonProps> = ({ children, className }) => (
  <h2
    className={twMerge(
      "text-[2rem] leading-9 font-bold mb-4 text-pretty",
      className,
    )}
  >
    {children}
  </h2>
);

export const Text: React.FC<CommonProps> = ({ children, className }) => (
  <p className={twMerge("mb-3", className)}>{children}</p>
);

export const Header: React.FC<Omit<CommonProps, "className">> = ({
  children,
}) => (
  <div className="py-9 bg-dsfr-blue-3 w-full">
    <h1 className="font-bold text-[2rem] md:text-[2.5rem] max-w-[54rem] w-full mx-auto px-4">
      {children}
    </h1>
  </div>
);

export const List: React.FC<CommonProps> = ({ children, className }) => (
  <ul className={twMerge("list-disc pl-[1rem] mb-3", className)}>{children}</ul>
);
