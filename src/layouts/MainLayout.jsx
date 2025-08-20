import React from "react";

const MainLayout = ({ children }) => {
  return (
    // Wenn Header fixed oben angezeigt padding hinzufuegen
    <div
      className="bg-third 
                    relative
                    px-2 pt-25 sm:pt-27 lg:pt-29"
    >
      {children}
    </div>
  );
};

export default MainLayout;
