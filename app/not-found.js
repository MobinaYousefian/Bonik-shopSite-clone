import {Box, Button} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function NotFound () {
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6rem"

        }}>
            <Image src={"/404.svg"} alt={"404"} width={300} height={174}/>
            <Box sx={{
                width: "280px",
                marginTop: "2rem",
                marginBottom: "4rem",
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>
                <Link href={"/"}>
                    <Button sx={{
                        backgroundColor: "#E94560",
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        textTransform: 'none',
                        border: `1px solid #E94560`,
                        paddingX: "1.5rem",
                        '&:hover': {
                            backgroundColor: "#E94560",
                            color: '#fff',
                            boxShadow: "0px 1px 5px rgba(3,0,71,0.25)",
                        },
                        ":disabled": {
                            backgroundColor: '#DAE1E7',
                            color: '#fff',
                            boxShadow:'none',
                            border: `1px solid #DAE1E7`,
                        }
                    }}>
                        Go To Home
                    </Button>
                </Link>
                <Button sx={{
                    backgroundColor: '#fff',
                    color: "#E94560",
                    fontWeight: 'bold',
                    fontSize: '14px',
                    textTransform: 'none',
                    boxShadow:'none',
                    border: "1px solid #E94560",
                    paddingX: "1.25rem",
                    '&:hover': {
                        backgroundColor: "#E94560",
                        color: '#fff'
                    },
                    ":disabled": {
                        backgroundColor: '#DAE1E7',
                        color: '#7D879C'
                    }
                }}>
                    Go Back
                </Button>
            </Box>
        </Box>
    )
}