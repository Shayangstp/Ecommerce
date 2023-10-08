import toast from "react-hot-toast";

export const errorMessage = (message: string) => {
  toast.error(message, {
    style: {
      fontSize: "16px",
      background: "#333",
      color: "#fff",
      textAlign: "center",
    },
  });
};

export const successMessage = (message: string) => {
  toast.success(message, {
    style: {
      fontSize: "16px",
      background: "#333",
      color: "#fff",
      textAlign: "center",
    },
  });
};
