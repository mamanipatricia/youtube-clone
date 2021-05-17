import { useState } from "react";

export const useLoading = () => {
  const [status, setStatus] = useState("pending");

  const updateStatus = (key) => {
    setStatus(key);
  };

  return {
    status: status,

    pending: () => updateStatus("pending"),
    success: () => updateStatus("success"),
    error: () => updateStatus("error"),

    isPending: status === "pending",
    isSuccess: status === "success",
    isError: status === "error",
  };
};
