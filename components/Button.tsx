export type ButtonProps = {
  text: string,
  emphasized?: boolean,
}

export default function Button({ text, emphasized }: ButtonProps) {
  return emphasized
    ? <button className="button-emphasized">
      <p className="button-emphasized-text">{text}</p>
    </button>
    : <button className="button">
      <p className="button-text">{text}</p>
    </button>;
}
