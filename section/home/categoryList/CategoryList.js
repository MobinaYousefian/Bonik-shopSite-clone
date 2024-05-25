'use client'
import {styled} from '@mui/material/styles';
import {Paper , Typography ,Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useState} from 'react'
import Image from 'next/image'
import AutoMobile from '../../../public/asset/topCategories/autoMobile.png'
import Car from '../../../public/asset/topCategories/car.png'
import Fashion from '../../../public/asset/topCategories/fashion.png'
import Electronics from '../../../public/asset/topCategories/electronics.png'
import Mobile from '../../../public/asset/topCategories/mobile.png'
import Laptop from '../../../public/asset/topCategories/laptop.png'
import Desktop from '../../../public/asset/topCategories/desktop.png'
import Tablet from '../../../public/asset/topCategories/tablet.png'
import Fashion1 from '../../../public/asset/topCategories/fashion1.png'
import Electronics1 from '../../../public/asset/topCategories/electronics1.png'
import Furniture from '../../../public/asset/topCategories/furniture.png'
import Camera from '../../../public/asset/topCategories/camera.png'
import Title from "@/section/home/title/Title";

const PaperCustom = styled(Paper)({
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    borderRadius: '10px',
    margin: 'auto',
    boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    cursor:'pointer',
    '&:hover': {
        boxShadow: 'rgb(3 0 71 / 9%) 0px 8px 45px'
    }
})

const CategoryList = () => {

    const [paper, setPaper] = useState([
        {id: '1', title: 'Automobile', image: AutoMobile},
        {id: '2', title: 'Car', image: Car},
        {id: '3', title: 'Fashion', image: Fashion},
        {id: '4', title: 'Electronic', image: Electronics},
        {id: '5', title: 'Mobile', image: Mobile},
        {id: '6', title: 'Laptop', image: Laptop},
        {id: '7', title: 'Desktop', image: Desktop},
        {id: '8', title: 'Tablet', image: Tablet},
        {id: '9', title: 'Fashion', image: Fashion1},
        {id: '10', title: 'Electronic', image: Electronics1},
        {id: '11', title: 'Furniture', image: Furniture},
        {id: '12', title: 'Camera', image: Camera},
    ])
    return (
        <Grid my={2}>
            <Title title={'Categories'} icon={<DashboardIcon/>} url={"/category"}/>
            <Grid container spacing={3}>
                {paper.map(item => (
                    <Grid key={item.id} item xs={12} sm={4} md={3} lg={2}>
                        <PaperCustom>
                            <Grid display={'flex'} alignItems={'center'}>
                                <Grid mr={1}>
                                    <Image src={item.image} alt={item.title}/>
                                </Grid>
                                <Grid>
                                    <Typography>
                                        {item.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </PaperCustom>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default CategoryList;