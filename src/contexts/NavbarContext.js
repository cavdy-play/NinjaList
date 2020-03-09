import React, { useState, createContext } from 'react';

export const NavbarContext = createContext();

const NavbarContextProvider = props => {
  const [navbar] = useState([
    { title: 'Home', id: 1 },
    { title: 'About', id: 2 },
    { title: 'Contact', id: 3 }
  ]);

  return (
    <NavbarContext.Provider value={{ navbar }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
