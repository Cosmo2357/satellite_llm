import React, { useEffect } from 'react'
import { FaUserAlt } from "react-icons/fa";

type OutlineButtonProps = {
  props?: React.HTMLProps<HTMLButtonElement>;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  is_loading?: boolean;
  colorClass?: string;
  importClass?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = (props) => {
  const { colorClass, onClick, is_loading, disabled, importClass, children = "Click", icon = <FaUserAlt size={"12px"} /> } = props;
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    is_loading && setLoading(is_loading);
  }, [is_loading]);

  return (
    <button
      className={`h-10 w-full flex items-center justify-center py-2 px-4 rounded  shadow border  border-black bg-gray-100 text-black ${importClass}  
      ${disabled && "disabled"}`}>
      {is_loading
        ? <div className="w-4 h-4 border-2 border-t-white border-b-white rounded-full animate-spin" />
        : <>
          <div className="mr-2 flex items-center">{icon}</div>
          <div>{children}</div>
        </>}
    </button>
  );
}

export default OutlineButton;