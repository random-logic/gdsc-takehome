import {ReactNode} from "react";

export default function Section({children}: {children: ReactNode}) {
  return <div className="px-edge">
    <div className="flex justify-center">
      <div className="content">
        {children}
      </div>
    </div>
  </div>;
}
