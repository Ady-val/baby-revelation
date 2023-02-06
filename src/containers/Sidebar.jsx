import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { useMenuControl } from "../context/MenuControl";

export default function Sidebar({SidebarData}) {
  const { data, openMenu, closeMenu } = useMenuControl()

  return (
    <div className={`top-0 left-0 w-[4.5rem] ${data.isOpen ? "md:w-72" : "md:w-[4.5rem]"} transition-width transition-slowest ease duration-300 bg-menu flex flex-col`}>
      <div className="bg-menu h-28 w-full" />
      {SidebarData.map((item, index) => {
        return (
          <SideBarButton
            icon={item.icon}
            text={item.title}
            selected={index == 0 ? true : false}
            path={item.path}
            key={index}
          />
        )
      })}
      <div className="w-full grow grid grid-cols-1 gap-8 content-end">
        <div className="flex flex-row justify-end">
          <button onClick={() => data.isOpen ? closeMenu() : openMenu()} className="invisible md:visible mb-6 mr-6">
            { data.isOpen ? (
              <FaRegArrowAltCircleLeft className="text-2xl text-secondary" />
            ) : (
              <FaRegArrowAltCircleRight className="text-2xl text-secondary" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

const SideBarButton = ({ icon, text, selected, path }) => (
  <Link className={actualPath(path) ? 'sidebar-button-selected' : 'sidebar-button'} to={path}>
    <div className="mx-4">{actualPath(path) ? icon.selected : icon.unselected}</div>
    <div className="truncate">{text}</div>
  </Link>
);

const actualPath = (path) => {
  const location = useLocation()
  const arrayPathLocation = location.pathname.split('/')
  const arrayPath = path.split('/')
  return (arrayPathLocation[2] == arrayPath[2])
}
