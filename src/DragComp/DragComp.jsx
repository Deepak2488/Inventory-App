import { useDrag } from "react-dnd";

const DragComp = ({ item, draggableList }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "drag",
      item,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [draggableList]
  );

  return (
    <div ref={drag}>
      <button className="same" type="button">
        {item.icon} {item.label}
      </button>
    </div>
  );
};

export default DragComp;
