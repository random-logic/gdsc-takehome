export type SpacerProps = {
  rem: number;
};

export default function Spacer({ rem }: SpacerProps) {
  return <div style={{ paddingTop: `${rem}rem`, paddingBottom: `${rem}rem` }}></div>;
}
