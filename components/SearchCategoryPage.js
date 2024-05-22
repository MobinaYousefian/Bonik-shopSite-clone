'use client'
import {BoxCustom} from "@/style/style";
import {Grid, SwipeableDrawer} from "@mui/material";
import {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {check1, check2, check3} from "@/library/checks";
import SearchHead from "@/section/search/SearchHead";
import SearchFilter from "@/section/search/SearchFilter";
import SearchCards from "@/section/search/SearchCards";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function SearchCategoryPage({categoryData}) {
    const [menu,setMenu] = useState(false);
    const [card,setCard] = useState('vertical');
    const [filter , setFilter] = useState(
        {
            price:'Relevance',
            min:0,
            max:99999,
        }
    );
    const matches = useMediaQuery('(min-width:900px)');
    const matchesHead = useMediaQuery('(min-width:750px)');

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    return (
        <BoxCustom>
            <Grid container spacing={3}>
                <SwipeableDrawer  anchor="left" open={menu} onClose={()=>setMenu(false)} onOpen={()=>setMenu(true)}>
                    <Grid width={'280px'}>
                        <SearchFilter
                            filter={filter}
                            setFilter={setFilter}
                            matches={matches}
                            check1={check1}
                            check2={check2}
                            check3={check3}
                            pathName={pathName}
                            router={router}
                            searchParams={searchParams}
                        />
                    </Grid>
                </SwipeableDrawer>
                <SearchHead
                    card={card}
                    setCard={setCard}
                    filter={filter}
                    setFilter={setFilter}
                    categoryData={categoryData}
                    setMenu={setMenu}
                    matches={matches}
                    matchesHead={matchesHead}
                />
                <Grid item md={3.25} lg={3} display={'none'} sx={{
                    '@media (min-width: 900px)': {
                        display: "block"
                    },
                }}>
                    <SearchFilter
                        filter={filter}
                        setFilter={setFilter}
                        matches={matches}
                        check1={check1}
                        check2={check2}
                        check3={check3}
                        pathName={pathName}
                        router={router}
                        searchParams={searchParams}
                    />
                </Grid>
                <SearchCards
                    card={card}
                    filter={filter}
                    categoryData={categoryData}
                    searchParams={searchParams}
                />
            </Grid>
        </BoxCustom>
    )
}