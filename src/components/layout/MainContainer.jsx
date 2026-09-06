import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="mx-auto my-4 px-6 py-4 max-w-3xl min-h-[80vh] flex flex-col flex-1 bg-brand-background">
      {children}
    </div>
  );
}
