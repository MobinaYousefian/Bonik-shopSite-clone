import {Grid, Typography} from "@mui/material";
import {ProductData} from "@/library/ProductData";
import Theme from "../../../theme/theme";
import Link from "next/link";
import {PaperCustomH} from "@/style/style";

const SearchResult = ({search ,setSearch}) => {
    return(
        <Grid position={'absolute'} width={'100%'} top={'50px'} display={search.search === '' || ProductData.filter(p => p.name.toLowerCase().includes(search.search.toLowerCase())).length === 0 ? 'none' : 'block'}>
            <PaperCustomH sx={{padding: '18px 0'}}>
                {search.search === '' ? '' :ProductData.filter(p => p.name.toLowerCase().includes(search.search.toLowerCase())).map(p => (
                    <Grid key={p.id} display={'flex'} alignItems={'center'} sx={{minHeight:'40px',cursor:'pointer','&:hover':{color:Theme.palette.primary.main,backgroundColor:'#F6F9FC'}}}>
                        <Link href={`/product/${p.id}`}>
                            <Typography pl={3} onClick={()=>setSearch({search: ''})}>
                                {p.name}
                            </Typography>
                        </Link>
                    </Grid>
                ))}
            </PaperCustomH>
        </Grid>
    )
}
export default SearchResult