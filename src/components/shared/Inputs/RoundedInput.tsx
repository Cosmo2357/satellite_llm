import React, { useState } from 'react';

type RoundInputProps = {
  style?: React.CSSProperties;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RoundInput: React.FC<RoundInputProps> = ({ type = 'text', ...props }) => {
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
      <input className={`rounded-full w-full h-10 px-4 text-base bg-gray-800 text-white`} {...inputProps} />

      {type === 'password' &&
        <div className={`iconWrapper`} onClick={togglePasswordVisibility}>
          show
        </div>
      }

    </div>
  );
};

export default RoundInput;