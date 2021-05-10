import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function HorsesList({ children }) {
  return (
    <div className="row-cols-3">
      {children}
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}