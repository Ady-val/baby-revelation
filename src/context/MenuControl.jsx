import React, { createContext, useContext, useState } from "react"

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [ isOpen, setIsOpen ] = useState(true);

  const openMenu = () => {
    setIsOpen(true);
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const value = { data: { isOpen }, openMenu, closeMenu }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export const useMenuControl = () => {
  return useContext(MenuContext)
}