import React, { useState } from 'react';

type InputProps = {
  style?: React.CSSProperties;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ type = 'text', ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType = isPasswordVisible ? 'text' : type;

  const inputProps = {
    ...props,
    type: inputType,
  };

  const iconClass = isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye';

  return (
    <div className={`w-4/12`}>
      <input className={`rounded w-full h-10 px-3 text-base`} {...inputProps} />
      {type === 'password' && (
        <div className={``} onClick={togglePasswordVisibility}>
          show
        </div>
      )}
    </div>
  );
};

export default Input;