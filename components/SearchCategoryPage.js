'use client'
import {BoxCustom} from "@/style/style";
import {Grid, SwipeableDrawer} from "@mui/material";
import {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {check1, check2, check3} from "@/library/checks";
import SearchHead from "@/section/search/SearchHead";
import SearchFilter from "@/section/search/SearchFilter";
import SearchCards from "@/section/search/SearchCards";

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
    const matches = useMediaQuery('(min-width:1027px)');
    const matchesHead = useMediaQuery('(min-width:750px)');

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
                <Grid item lg={3} display={matches === true ? 'block' : 'none'}>
                    <SearchFilter
                        filter={filter}
                        setFilter={setFilter}
                        matches={matches}
                        check1={check1}
                        check2={check2}
                        check3={check3}
                    />
                </Grid>
                <SearchCards
                    card={card}
                    filter={filter}
                    categoryData={categoryData}
                />
            </Grid>
        </BoxCustom>
    )
}