import { MdStorage } from "react-icons/md";
import { HiHome, HiGift, HiCurrencyDollar, HiViewGrid } from "react-icons/hi";
import { HiUserCircle, HiUserGroup } from "react-icons/hi2";
import { RiVipFill } from "react-icons/ri";
import { FaUserLock } from "react-icons/fa"
import { FaHouseUser } from "react-icons/fa6";

export const DataNavbarBuka = [
    {
        key: 8,
        label: "Home",
        link: "/home",
        icon: HiViewGrid,
    },
    {
        key: 1,
        label: "User",
        link: "/user",
        icon: FaHouseUser,
    },
    {
        key: 2,
        label: "Langganan",
        link: "/langganan",
        icon: RiVipFill,
    },
    {
        key: 3,
        label: "Gift",
        link: "/gift",
        icon: HiGift,
    },
    {
        key: 4,
        label: "Transaksi",
        link: "/transaksi",
        icon: HiCurrencyDollar,
    },
    {
        key: 5,
        label: "Admin",
        link: "/admin",
        icon: HiUserCircle,
    },
    {
        key: 6,
        label: "Role",
        link: "/role",
        icon: HiUserGroup,
    },
    {
        key: 7,
        label: "Log Admin",
        link: "/log",
        icon: FaUserLock,
    },
]

