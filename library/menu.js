import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";

export const menu = [
    {
        id:1,
        title:'Car',
        link:'/[productId]/search/car',
        icon:<DirectionsCarIcon/>
    },
    {
        id:2,
        title:'Motor',
        link:'/[productId]/search/motor',
        icon:<TwoWheelerIcon/>
    },
    {
        id:3,
        title:'Gadget',
        link:'/[productId]/search/gadget',
        icon:<DevicesOtherIcon/>
    },
]