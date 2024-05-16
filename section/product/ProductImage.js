'use client'
import {Box, Grid} from "@mui/material";
import Image from "next/image";
import {useState} from "react";
import Theme from "../../theme/theme";
import {PaperCustom} from "@/style/style";

const ProductImage = ({product,px=8 ,margin=4,mt=0} ) =>{
    const [bigImage,setBigImage] = useState(1);

    return(
        <Grid item xs={12} sm={12} md={6}>
            <Grid container px={1}>
                <Box display={'flex'} flexDirection={'column'} margin={'auto'}>
                    <Grid px={0} mt={mt} width={350} height={350}>
                        <Image src={product.images[bigImage-1].image} width={350} height={350} alt={'head phone'} className={"img-w-h-100"}/>
                    </Grid>
                    <Grid mt={margin}>
                        <Grid display={'flex'} justifyContent={'center'} container spacing={2} mb={2}>
                            {product.images.map(img => (
                                <Grid item key={img.id}>
                                    <PaperCustom sx={{width: '70px',padding:'0',border:img.id === bigImage ? `1px solid ${Theme.palette.primary.main}` : '',cursor:'pointer'}}>
                                        <Image src={img.image} alt={`${product.name}`} onClick={()=>setBigImage(img.id)} className={"img-w-h-100"}/>
                                    </PaperCustom>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductImage