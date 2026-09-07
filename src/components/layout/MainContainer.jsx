import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="mx-auto my-4 px-4 py-4 max-w-[72rem] min-h-[80vh] flex flex-col flex-1 md:px-6 lg:px-8">
      {children}
    </div>
  );
}
