import { TiTabsOutline, TiArrowMaximise } from "react-icons/ti";
import {
  BsArrowRightShort,
  BsFonts,
  BsBorderAll,
  BsLayoutSidebar,
  BsArrowDownShort,
} from "react-icons/bs";
import { ImEmbed2 } from "react-icons/im";
import { AiOutlineLine } from "react-icons/ai";
import Table from "./Table";
import Column from "./Column";
import Row from "./Row";
import Tabs from "./Tabs";
import Tigflow from "./Tigflow";
import Header from "./Header";
import Divider from "./Divider";
import Markdown from "./Markdown";
import Prodia from "./Prodia";

const style = {
  color: "purple",
};

export const dragJson = [
  {
    id: 0,
    icon: <TiTabsOutline style={style} size={20} />,
    component: (
      <div>
        <Tabs />
      </div>
    ),
    label: "Tabs",
  },
  {
    id: 1,
    icon: <BsArrowRightShort style={style} size={20} />,
    component: (
      <div>
        <Row />
      </div>
    ),
    label: "Row",
  },
  {
    id: 2,
    icon: <BsArrowDownShort style={style} size={20} />,
    component: (
      <div>
        <Column />
      </div>
    ),
    label: "Column",
  },
  {
    id: 3,
    icon: <BsFonts style={style} size={20} />,
    component: (
      <div>
        <Header />
      </div>
    ),
    label: "Header",
  },
  {
    id: 4,
    icon: <ImEmbed2 style={style} size={20} />,
    component: (
      <div>
        <Markdown />
      </div>
    ),
    label: "Markdown",
  },
  {
    id: 5,
    icon: <AiOutlineLine style={style} size={20} />,
    component: (
      <div>
        <Divider />
      </div>
    ),
    label: "Divider",
  },
  {
    id: 6,
    icon: <BsBorderAll style={style} size={15} />,
    component: (
      <div>
        <Table />
      </div>
    ),
    label: "Table",
  },
  {
    id: 7,
    icon: <BsLayoutSidebar style={style} size={15} />,
    component: <div><Prodia/></div>,
    label: "Process Diagram",
  },
  {
    id: 8,
    icon: <TiArrowMaximise style={style} size={20} />,
    component: (
      <div>
        <Tigflow />
      </div>
    ),
    label: "Trigger Flow [TFD]",
  },
];

export const dropJson = [
  {
    id: "filter",
    label: "Filter",
  },
  {
    id: "path",
    label: "Inventory Path",
  },
  {
    id: "channel",
    label: "Inventory By Channel",
  },
  {
    id: "sku",
    label: "Inventory By SKU",
  },
];
