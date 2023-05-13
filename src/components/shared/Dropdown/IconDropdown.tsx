import React, { useState, useRef, useEffect, useCallback, Children } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsChevronCompactDown } from "react-icons/bs";

type OptionType = {
  label: string;
  value: string | null;
  icon?: React.ReactNode;
  counter?: number;
};

type IconDropdownProps = {
  options: OptionType[];
  initialTitle?: string;
  children?: React.ReactNode;
  defaultSelectedValue?: string | null;
  onSelect: (option: OptionType) => void;
  mainIcon?: React.ReactNode;
};

const IconDropdown: React.FC<IconDropdownProps> = (props
) => {
  const { options, onSelect, mainIcon = <FaUserAlt size={13} />, initialTitle = "a" } = props;
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let menuRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
    
      <div className={'relative w-10 text-base '}
        onClick={toggleMenu} ref={menuRef}>
        <button className={"w-full inline-flex justify-between items-center rounded-full h-10   px-4 text-base bg-gray-800 text-white"}>
          <div className={`flex justify-center items-center `}>
            {selectedOption
              ? <><div className={`mr-2`}>{selectedOption.icon}</div>{selectedOption.label} </>
              : initialTitle}
          </div>
          <BsChevronCompactDown />
        </button>
      </div>

      {isOpen && (
        <div className={`absolute flex flex-col w-3/12 py-2 mt-1  rounded shadow bg-gray-800 text-white`}>
          {options.map((option) => (<>
            {selectedOption !== option && <>
              <button
                key={option.label}
                onClick={() => { handleOptionClick(option) }}
                className={`flex justify-start items-center px-3 h-10 hover:bg-gray-700`}>
                <div className="mr-2">{option.icon}</div>
                <div className={`label`}>{option.label}</div>
              </button></>}
          </>
          ))}
        </div>
      )}

    </>
  );
};

export default IconDropdown;