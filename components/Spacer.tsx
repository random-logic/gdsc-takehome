export type SpacerProps = {
  rem: number;
}

export default function Spacer({rem}: SpacerProps) {
  return <div className={`py-[${rem}rem]`}></div>;
}
