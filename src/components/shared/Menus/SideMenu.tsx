import React, { useState } from 'react'
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserFriends } from 'react-icons/fa';
import { RiBuilding4Fill } from 'react-icons/ri';

type SideMenuProps = {
  props?: React.HTMLProps<HTMLButtonElement>;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  prefixIcon?: React.ReactNode;
  options?: React.ReactNode;
}

const SideMenu: React.FC = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("1");

  const options = [
    {
      value: "1",
      icon: <AiOutlineHome size={"28px"} />,
      title: "My Service Name"
    },
    {
      value: "2",
      icon: <FaUserFriends size={"28px"} />,
      title: "Users"
    },
    {
      value: "3",
      icon: <RiBuilding4Fill size={"28px"} />,
      title: "Comapnies"
    },
    {
      value: "4",
      icon: <AiFillSetting size={"28px"} />,
      title: "Settings"
    },
  ]

  if (!options) {
    return <div>Loading...</div>;
  }

  return (<>

    <div onClick={() => setOpen(!open)} className={open
      ? ``
      : ``
    }>

      <ul className={``}>
        <div className="color_dark">aaaa</div>
        {options.map((option) =>
        (
          <li onClick={() => {
            setSelected(option.value)
          }} key={option.value} className={
            option.value === selected
              ? ``
              : ""
          }>
            <div>{option.icon}</div>
            <div className={``}>{option.title}</div>
          </li>
        )
        )}
      </ul>

    </div>
  </>)
}
export default SideMenu