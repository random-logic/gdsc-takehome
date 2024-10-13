import MenuOption, {MenuOptionProp} from "@/components/navbar/MenuOption";

export type MenuOptionProps = {
  items: MenuOptionProp[],
};

export default function MenuOptions({ items }: MenuOptionProps) {
  return <div className="menu-options">
    {
      items.map((item, idx) => (
        <MenuOption key={idx} {...item} />
      ))
    }
  </div>
}
