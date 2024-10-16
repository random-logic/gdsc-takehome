"use client";

export type ButtonProps = {
  text: string,
  emphasized?: boolean,
  onClick?: () => void,
}

export default function Button({ text, emphasized, onClick }: ButtonProps) {
  if (!onClick)
    onClick = () => {};

  return emphasized
    ? <button className="button-emphasized" onClick={onClick}>
      <p className="button-emphasized-text">{text}</p>
    </button>
    : <button className="button" onClick={onClick}>
      <p className="button-text">{text}</p>
    </button>;
}
