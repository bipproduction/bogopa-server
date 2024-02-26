import { MdStorage } from "react-icons/md";
import { HiHome, HiGift, HiCurrencyDollar, HiViewGrid } from "react-icons/hi";
import { HiUserCircle, HiUserGroup } from "react-icons/hi2";
import { RiVipFill } from "react-icons/ri";
import { FaUserLock } from "react-icons/fa"
import { FaHouseUser } from "react-icons/fa6";

export const DataNavbarTertutup = [
    {
        key: 8,
        label: "DASHBOARD",
        link: "/dashboard",
        icon: HiViewGrid,
     },
    {
        key: 1,
        label: "USER",
        link: "/user",
        icon: FaHouseUser,
     },
    {
        key: 2,
        label: "VIP",
        link: "/vip",
        icon: RiVipFill,
     },
    {
        key: 3,
        label: "GIFT",
        link: "/gift",
        icon: HiGift,
     },
    {
        key: 4,
        label: "TRANSAKSI",
        link: "/transaksi",
        icon: HiCurrencyDollar,
     },
    {
        key: 5,
        label: "ADMIN",
        link: "/admin",
        icon: HiUserCircle,
     },
    {
        key: 6,
        label: "ROLE",
        link: "/role",
        icon: HiUserGroup,
     },
    {
        key: 7,
        label: "LOG",
        link: "/log",
        icon: FaUserLock,
     },
]