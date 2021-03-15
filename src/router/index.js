import Home from "../views/Index";
import Chart from "../views/Chart";

const router = [
  {
    name: "Home",
    component: Home,
    isExact: true
  },
  {
    name: "Chart",
    component: Chart,
    isExact: true
  }
];

export default router;
