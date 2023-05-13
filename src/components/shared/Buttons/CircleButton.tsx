import { FaUserAlt } from "react-icons/fa";

type CircleButtonProps = {
  imageUrl?: string | null;
  counter?: number;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  importClass?: string;
}

const CircleButton: React.FC<CircleButtonProps> = (props
) => {
  const { children, imageUrl, counter, importClass } = props;
  return (

    <div className={`relative h-12 w-12`}>
      <button
        className={`flex w-full h-full rounded-full items-center justify-center shadow  bg-gray-800 `}
        style={{ backgroundImage: `url(${imageUrl})` }}>
        {children || <FaUserAlt size={13} />}
      </button>

      {counter && counter > 0
        ? <div className={`flex justify-center items-center rounded-full bg-red-500 h-4 w-4 absolute top-0 right-0 z-10 text-xs text-white`}>{counter}</div>
        : null
      }

    </div>
    
  )
}

export default CircleButton