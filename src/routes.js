import Welcome from "views/Welcome.jsx";
import Step1 from "views/Step1.jsx";
import Step2 from "views/Step2.jsx";
import Step3 from "views/Step3.jsx";
import FinalBoss from "views/FinalBoss.jsx";

var routes = [
  {
    path: "/Hello",
    name: "Welcome",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: Welcome,
    layout: "/admin"
  },
  {
    path: "/step1",
    name: "Step 1",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Step1,
    layout: "/admin"
  },
  {
    path: "/step2",
    name: "Step 2",
    rtlName: "خرائط",
    icon: "tim-icons icon-atom",
    component: Step2,
    layout: "/admin"
  },
  {
    path: "/step3",
    name: "Step3",
    rtlName: "إخطارات",
    icon: "tim-icons icon-atom",
    component: Step3,
    layout: "/admin"
  },
  {
    path: "/FinalBoss",
    name: "FinalBoss",
    rtlName: "إخطارات",
    icon: "tim-icons icon-atom",
    component: FinalBoss,
    layout: "/admin"
  },

];
export default routes;
