import React from "react";

export default function ListElement(props) {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        color: "white",
        background: "gray",
      }}
    >
      {props.item.id}
    </div>
  );
}
