import { useEffect } from "react";

const NotificationPop = ({ message, handleClose, type }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
      <div
        className={` p-4 ${
          type ? "bg-green-400" : "bg-red-400"
        }  text-white rounded-lg shadow `}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NotificationPop;
