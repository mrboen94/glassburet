import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { People } from "../../../pages/unrated";

export default function ColorChanger({
  color,
  changeColor,
  data,
  name,
  checked,
}: {
  color: string;
  changeColor: Function;
  data: People;
  name: string;
  checked: boolean;
}) {
  const [currentColor, setColor] = useState("");
  useEffect(() => {
    changeColor({
      ...data,
      ...{
        [name]: {
          checked: checked,
          color: currentColor,
        },
      },
    });
  }, [currentColor, checked, data, name, changeColor]);

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
}
