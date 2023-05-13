import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

type InputProps = {
  style?: React.CSSProperties;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: React.FC<InputProps> = ({ type = 'text', ...props }) => {
  const { placeholder = "Search" } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputType = isPasswordVisible ? 'text' : type;

  const iconClass = isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye';

  return (
    <div className={``}>
      <input className={``} placeholder={placeholder} {...props} />
      <span className={``} >
        <BiSearch />
      </span>
    </div>
  );
};

export default SearchBox;