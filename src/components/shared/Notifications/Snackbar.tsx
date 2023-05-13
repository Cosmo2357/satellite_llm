import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdErrorOutline } from 'react-icons/md'

interface SnackbarProps {
  message: string;
  duration?: number;
  notificationType?: string | null;
  onClose?: () => void;
}

const Snackbar: React.FC<SnackbarProps> = (
  props
) => {
  const { message, duration = 3000, onClose, notificationType = "success" } = props;
  const [open, setOpen] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setOpen(false);
    onClose && onClose();
  };

  return open ? (
    <div className={`flex flex-row justify-between items-center h-10 w-6/12 px-4 rounded bg-gray-800 text-white`}>

      {notificationType === "success" &&
        <div className={`text-green-500`}>
          <AiOutlineCheckCircle size={18} />
        </div>}

      {notificationType === "warning" &&
        <div className={`text-yellow-500`}>
          <AiOutlineCheckCircle size={18} />
        </div>
      }

      {notificationType === "error" &&
        <div className={`text-red-500`}>
          <MdErrorOutline size={18} />
        </div>}

      <div className={'text-sm'}>{message}</div>

      <button
        onClick={handleClose}>
        <IoIosCloseCircle size={"22px"} />
      </button>
    </div>
  ) : null;
};

export default Snackbar;
