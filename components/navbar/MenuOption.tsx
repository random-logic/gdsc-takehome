export type MenuOptionProp = {
  name: string,
  link: string,
  emphasized?: boolean,
};

export default function MenuOption({ name, link, emphasized}: MenuOptionProp) {
  return (emphasized
    ? <a className="menu-option-emphasized-button block" href={link}>
        <p className="menu-option-emphasized-text">
          {name}
        </p>
    </a>
    : <a className="menu-option" href={link}>
        {name}
    </a>
  );
}
