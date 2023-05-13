import { useState} from "react";

type OptionType = {
  label: string;
  value: string | null;
  icon?: React.ReactNode;
  counter?: number;
};

type HorizontalMenuProps = {
  style?: React.CSSProperties;
  options: OptionType[];
  defaultSelectedValue?: string | null;
  onSelect: (option: OptionType) => void;
  icon?: React.ReactNode;
  selectedValue?: string | null;
};

const HorizontalMenu: React.FC<HorizontalMenuProps> = (props
) => {
  const { options, onSelect, style, selectedValue } = props;
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
      <div style={style} className={`flex justify-between w-full p-3 rounded  bg-gray-900 text-white`}>
        <div className={`w-full flex flex-colum justify-between items-center`}>

          {options.map((option) => (
            <button key={option.label} className={
              option.value === selectedOption.value
                ? `w-4/12 flex flex-row justify-center items-center cursor-pointer rounded h-10  px-4 text-base mx-2 bg-gray-700`
                : `w-4/12 flex flex-row justify-center items-center cursor-pointer rounded h-10  px-4 text-base mx-2 bg-gray-800`
            } onClick={() => {
              handleOptionClick(option)
            }}>

              <div className={`mr-2`}>{option.icon}</div>
              <div className={``}>{option.label}</div>

            </button>
          ))}

        </div>
      </div>
  );
};

export default HorizontalMenu;
