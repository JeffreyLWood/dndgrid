import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { ListManager } from "react-beautiful-dnd-grid";
import { useState, useEffect } from "react";
import ListElement from "./ListElement";

function App() {
  const data = [
    {
      id: "0",
      order: 0,
    },
    {
      id: "1",
      order: 1,
    },
    {
      id: "2",
      order: 2,
    },
    {
      id: "3",
      order: 3,
    },
    {
      id: "4",
      order: 4,
    },
    {
      id: "5",
      order: 5,
    },
    {
      id: "6",
      order: 6,
    },
    {
      id: "7",
      order: 7,
    },
    {
      id: "8",
      order: 8,
    },
    {
      id: "9",
      order: 9,
    },
  ];

  let [state, setState] = useState({ sortedList: data });

  const sortList = (list) => {
    setState({
      sortedList: list
        .slice()
        .sort((first, second) => first.order - second.order),
    });
    console.log("after", state.sortedList);
  };
  console.log("before", state.sortedList);
  const reorderList = (sourceIndex, destinationIndex) => {
    if (destinationIndex === sourceIndex) {
      return;
    }
    const list = state.sortedList;
    if (destinationIndex === 0) {
      list[sourceIndex].order = list[0].order - 1;
      sortList(list);
      return;
    }
    if (destinationIndex === list.length - 1) {
      list[sourceIndex].order = list[list.length - 1].order + 1;
      sortList(list);
      return;
    }
    if (destinationIndex < sourceIndex) {
      list[sourceIndex].order =
        (list[destinationIndex].order + list[destinationIndex - 1].order) / 2;
      sortList(list);
      return;
    }
    list[sourceIndex].order =
      (list[destinationIndex].order + list[destinationIndex + 1].order) / 2;
    sortList(list);
  };

  return (
    <div className="App">
      <ListManager
        items={state.sortedList}
        direction="horizontal"
        maxItems={4}
        render={(item) => <ListElement item={item} />}
        onDragEnd={reorderList}
      />
    </div>
  );
}

export default App;
