import React from "react";

export type ColumnsProps = {
  children: React.ReactNode,
  sm_reversed?: boolean,
};

export default function Columns({ children, sm_reversed }: ColumnsProps) {
  return sm_reversed
    ? <div className="columns flex-col-reverse lg:flex-row gap-[2rem] lg:gap-0">
        {children}
    </div>
    : <div className="columns flex-col lg:flex-row gap-[2rem] lg:gap-0">
        {children}
    </div>;
}
