import { useState } from "react";

export const useLoading = () => {
  const [status, setStatus] = useState({
    pending: true,
    success: false,
    error: false,
  });

  const updateStatus = (key) => {
    const newStatus = { [key]: true };
    Object.keys(status)
      .filter((k) => k !== key)
      .forEach((k) => (newStatus[k] = false));
    setStatus(newStatus);
  };

  const getStatus = () => {
    return Object.keys(status).find((key) => status[key]); // or status[key] === true
  };

  return {
    getStatus: () => getStatus(),
    pending: () => updateStatus("pending"),
    success: () => updateStatus("success"),
    error: () => updateStatus("error"),

    isPending: status.pending,
    isSuccess: status.success,
    isError: status.error,
  };
};
