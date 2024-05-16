'use client'
import {Box, Button} from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useState} from "react";
import {MegaMenu} from "@/components/megaMenu/MegaMenu";

export default function MegaMenuButton({title, backColor}) {
    const [show,setShow] = useState(false);

    return (
        <Box>
            <Button
                sx={{
                    color: "black",
                    backgroundColor: `#F6F9FC`,
                    fontSize: "14px",
                    "&:hover": { backgroundColor: `${backColor}` },
                }}
                onClick={()=>setShow(!show)}
            >
                <GridViewRoundedIcon sx={{ fontSize: "18px",margin: "4px" }} />
                {title}
                <KeyboardArrowDownIcon sx={{ fontSize: "18px",margin: "4px"}} />
            </Button>
            {show && <MegaMenu/>}
        </Box>
    );
}