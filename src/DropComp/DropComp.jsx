import { useDrop } from "react-dnd";
import "../NavBar/NavBar.css";

const DropComp = ({ item, dropHandler, droppedList }) => {
  const [{}, drop] = useDrop(
    () => ({
      accept: "drag",
      drop: (draggedItem) => {
        dropHandler(draggedItem, item.id);
      },
    }),
    [droppedList]
  );

  console.log("###Droppedist", droppedList, item);

  return (
    <div className="drop" ref={drop}>
      {item.label}
      {droppedList.map((item, index) => (
        // <button className="" type="button" key={index}>
        //   {item.icon} {item.label}
        // </button>
        <div key={index}>{item.component}</div>
      ))}
    </div>
  );
};

export default DropComp;
