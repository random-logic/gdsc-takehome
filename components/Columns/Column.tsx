import React from "react";

export type ColumnProps = {
  children: React.ReactNode,
};

export default function Column({ children }: ColumnProps) {
  return <div className="column">{children}</div>;
}
