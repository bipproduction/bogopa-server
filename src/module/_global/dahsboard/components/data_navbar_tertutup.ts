import { MdStorage } from "react-icons/md";
import { HiHome, HiGift, HiCurrencyDollar } from "react-icons/hi";
import { RiVipFill } from "react-icons/ri";

export const DataNavbarTertutup = [
    {
        key: 1,
        label: "USER",
        link: "/home",
        icon: HiHome,
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
        icon: MdStorage,
     },
    {
        key: 6,
        label: "ROLE",
        link: "/role",
        icon: MdStorage,
     },
    {
        key: 7,
        label: "LOG",
        link: "/log",
        icon: MdStorage,
     },
]