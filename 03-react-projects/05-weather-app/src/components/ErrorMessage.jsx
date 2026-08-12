import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="mt-4 w-full rounded-md border border-red-500/50 bg-red-950/40 px-4 py-3 text-red-300">
      {error}
    </div>
  );
};

export default ErrorMessage;