import React from "react";

export type ColumnProps = {
  children: React.ReactNode,
  sm_reversed?: boolean,
};

export default function Columns({ children, sm_reversed }: ColumnProps) {
  return sm_reversed
    ? <div className="columns sm:flex-row-reverse">
        {children}
    </div>
    : <div className="columns sm:flex-row">
        {children}
    </div>;
}
