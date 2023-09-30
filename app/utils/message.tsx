import toast from "react-hot-toast";

export const errorMassage = (message: string) => {
  toast.error(message, {
    style: {
      fontSize: "16px",
      background: "#333",
      color: "#fff",
      textAlign: "center",
    },
  });
};

export const successMassage = (message: string) => {
  toast.success(message, {
    style: {
      fontSize: "16px",
      background: "#333",
      color: "#fff",
      textAlign: "center",
    },
  });
};
