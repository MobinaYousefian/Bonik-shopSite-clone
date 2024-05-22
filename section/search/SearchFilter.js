import {Avatar, Divider, Grid, TextField} from "@mui/material";
import Theme from "../../theme/theme";
import MinimizeIcon from "@mui/icons-material/Minimize";
import {PaperCustom, TypographyMain} from "@/style/style";
import SearchList from "@/section/search/SearchList";
import SearchInput from "@/section/search/SearchInput";

const SearchFilter = ({check1, check2, check3, filter, setFilter, router, pathName, searchParams}) => {

    const handleChange = (e) => {
        setFilter({...filter, [e.target.name]: Number(e.target.value)})
    }

    const handleDeleteq = () => {
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.delete("q");
        router.push(`${pathName}?${urlSearchParams}`);
    }

    const handleDeleteStatus = () => {
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.delete("status");
        router.push(`${pathName}?${urlSearchParams}`);
    }

    const handleDeleteRating = () => {
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.delete("rating");
        router.push(`${pathName}?${urlSearchParams}`);
    }

    return (
        <PaperCustom>
            <SearchList/>
            <Divider sx={{margin: '10px 0'}} variant="middle"/>
            <Grid>
                <Grid my={1.5}>
                    <TypographyMain pl={2}>
                        Price Range
                    </TypographyMain>
                </Grid>
                <Grid px={2} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <Grid>
                        <TextField name={'min'} value={filter.min} onChange={handleChange} type={'number'}
                                   placeholder={'0'}/>
                    </Grid>
                    <Grid pb={1} fontSize={'1px'} color={Theme.palette.secondary.light} mx={1}>
                        <MinimizeIcon fontSize={'small'}/>
                    </Grid>
                    <Grid>
                        <TextField name={'max'} value={filter.max} onChange={handleChange} type={'number'} placeholder={'250'}/>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{margin: '10px 0'}} variant="middle"/>
            <Grid>
                <Grid my={3} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <TypographyMain pl={2}>
                        Brands
                    </TypographyMain>
                    {
                        (searchParams.get("q")) &&
                        <TypographyMain onClick={handleDeleteq} px={2} component={'span'} sx={{
                            '&:hover': {
                                color: Theme.palette.primary.main,
                            },
                            cursor : "pointer"
                        }}>
                            Clear Filter
                        </TypographyMain>
                    }
                </Grid>
                <Grid pb={1}>
                    <SearchInput option={check1}/>
                </Grid>
            </Grid>
            <Divider sx={{margin: '10px 0'}} variant="middle"/>
            <Grid my={3}>
                {
                    (searchParams.get("status")) &&
                    <Grid my={1} sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}>
                        <TypographyMain onClick={handleDeleteStatus} px={2} component={'span'} sx={{
                            '&:hover': {
                                color: Theme.palette.primary.main,
                            },
                            cursor : "pointer"
                        }}>
                            Clear Filter
                        </TypographyMain>
                    </Grid>
                }
                <Grid>
                    <SearchInput option={check2}/>
                </Grid>
            </Grid>
            <Divider sx={{margin: '10px 0'}} variant="middle"/>
            <Grid>
                <Grid my={3} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <TypographyMain pl={2}>
                        Rating
                    </TypographyMain>
                    {
                        (searchParams.get("rating")) &&
                        <TypographyMain onClick={handleDeleteRating} px={2} component={'span'} sx={{
                            '&:hover': {
                                color: Theme.palette.primary.main,
                            },
                            cursor : "pointer"
                        }}>
                            Clear Filter
                        </TypographyMain>
                    }
                </Grid>
                <Grid>
                    <SearchInput option={check3}/>
                </Grid>
            </Grid>
            <Divider sx={{margin: '10px 0'}} variant="middle"/>
            <Grid>
                <Grid my={2} >
                    <TypographyMain pl={2}>
                        Colors
                    </TypographyMain>
                </Grid>
                <Grid display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
                    <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#000000'}}> </Avatar>
                    <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#FF7A7A'}}> </Avatar>
                    <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#FFC672'}}> </Avatar>
                    <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#84FFB5'}}> </Avatar>
                    <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#70F6FF'}}> </Avatar>
                    <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#6B7AFF'}}> </Avatar>
                </Grid>
            </Grid>
        </PaperCustom>
    )
}

export default SearchFilter