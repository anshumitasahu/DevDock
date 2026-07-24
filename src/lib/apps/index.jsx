import { CalculatorIcon, ListBulletsIcon, GearIcon } from "@phosphor-icons/react";
import Calculator from "../../components/home/AppLogic/Calculator";
import ToDos from "../../components/home/AppLogic/ToDoList";
import Settings from "../../components/home/AppLogic/Settings";

export const AppsMenu = [
    {
        name: "Calculator",
        description: "use to calucate stuffs",
        icon: CalculatorIcon,
        app: <Calculator />
    },
    {
        name: "Todo",
        description: "use to do todo list",
        icon: ListBulletsIcon,
        app: <ToDos />
    },
    {
        name: "Settings",
        description: "use to customize the desktop",
        icon: GearIcon,
        app: <Settings />
    }
]