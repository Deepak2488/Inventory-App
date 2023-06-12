import React, { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, useDrop } from "react-dnd";
import SideNavBar from "../SideNavBar/SideNavBar";
import "./NavBar.css";
import { TiArrowMaximise } from "react-icons/ti";
import { BsThreeDots, BsChevronLeft } from "react-icons/bs";
import { AiOutlinePieChart, AiOutlineReload } from "react-icons/ai";
import { SlReload } from "react-icons/sl";
import { dragJson, dropJson } from "./dummy";
import DragComp from "../DragComp/DragComp";
import DropComp from "../DropComp/DropComp";

const style = {
  color: "purple",
};

const NavBar = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggableList, setDraggableList] = useState(dragJson);

  const dropHandler = (draggedItem, dropContainerId) => {
    //console.log("###DROPANDER", draggedItem, dropContainerId)
    setDroppedItems([...droppedItems, { ...draggedItem, dropContainerId }]);
    setDraggableList(
      draggableList.filter((item) => item.id !== draggedItem.id)
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="sidebar">
          {" "}
          <SideNavBar />
        </div>
        <div className="rest">
          <div className="top">
            <div className="Nav-left">
              <button
                color="purple"
                type="button"
                style={{
                  height: "70%",
                  border: "none",
                  backgroundColor: "#CBC3E3",
                  color: "purple",
                  borderRadius: "5px",
                }}
              >
                <BsChevronLeft size={15} />
              </button>
              <div className="five">
                <div style={{ fontWeight: "lighter", fontSize: "10px" }}>
                  {"Project > Dashboard 2022 > Inventory Dashboard"}
                </div>

                <div>2022 Inventory Dashboard</div>
              </div>
            </div>
            <div className="NavRight" style={{ marginLeft: "50px" }}>
              <button className="right">
                <SlReload style={style} />
              </button>
              <button className="right">
                <AiOutlineReload style={style} />
              </button>
              <button
                className="right"
                style={{ backgroundColor: "#CBC3E3", color: "purple" }}
              >
                Discard Changes
              </button>
              <button
                className="right"
                style={{ backgroundColor: "purple", color: "white" }}
              >
                Save
              </button>
              <button
                className="right"
                style={{ backgroundColor: "#CBC3E3", color: "purple" }}
              >
                <BsThreeDots />
              </button>
            </div>
          </div>
          <div className="bottom">
            <div className="one">
              <h4>Project Name</h4>

              <form class="nosubmit">
                <input class="nosubmit" type="search" placeholder="Search..." />
              </form>

              <div className="selecttag">
                <select name="" id="exp">
                  <option value="">Flows</option>
                  <option value="">Inventory Flow</option>
                  <option value="">Cannnel Flow</option>
                  <option value="">Reginoal Distribution</option>
                  <option value="">New Product Integration</option>
                </select>
                <select name="" id="">
                  <option value="">Dasboard</option>
                  <option value="">Charts Dashboard</option>
                  <option value="">User Dashboard</option>
                </select>
                <select name="" id="">
                  <option value="">Datasets</option>
                  <option value="">Spend Analytics Data</option>
                  <option value="">Vendor Data</option>
                </select>
                <select name="" id="">
                  <option value="">Connectors</option>
                  <option value="">Global Connectors</option>
                  <option value="">Local Connectors</option>
                </select>
              </div>
            </div>
            <div className="two">
              {dropJson.map((item, index) => (
                <DropComp
                  key={index}
                  item={item}
                  dropHandler={dropHandler}
                  droppedList={droppedItems.filter(
                    (tab) => tab.dropContainerId === item.id
                  )}
                />
              ))}
            </div>
            <div className="three">
              <div>
                <button
                  className="same1"
                  type="button"
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "5px 0px 0px 5px",
                  }}
                >
                  <TiArrowMaximise size={20} /> Components
                </button>

                <button
                  className="same1"
                  type="button"
                  style={{ borderRadius: "0px 5px 5px 0px" }}
                >
                  <AiOutlinePieChart style={style} size={20} />
                  Charts
                </button>
              </div>
              {draggableList.map((item, index) => (
                <DragComp
                  key={index}
                  item={item}
                  draggableList={draggableList}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default NavBar;
