'use client'
import {Grid} from "@mui/material";
import {menu} from "@/library/menu";
import Theme from "@/theme/theme";
import Link from "next/link";
import {BoxCustom} from "@/style/style";

export default function CategoryPage() {
    return (
        <BoxCustom>
            <Grid display={'flex'} flexDirection={'column'} width={'50%'}>
                {menu.map(m => (
                    <Grid key={m.id} sx={{'&:hover':{color:Theme.palette.primary.main}}} my={1} boxShadow={'rgb(3 0 71 / 9%) 0px 1px 3px'} borderRadius={2}>
                        <Link href={m.link}>
                            <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}  p={2} sx={{cursor:'pointer'}}>
                                <Grid mr={3}>
                                    {m.icon}
                                </Grid>
                                <Grid>
                                    {m.title}
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </BoxCustom>
    )
}