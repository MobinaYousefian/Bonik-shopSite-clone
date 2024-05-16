'use client'
import { useState } from "react";
import {MenuItem,FormControl,Select} from "@mui/material";
import {addressForm} from "@/section/cart/firstStep/addressBoxData";
import {TypographyFormTitle} from "@/section/cart/firstStep/AdressBoxStyle";

const AddressBoxForm = () => {
    const [address, setAddress] = useState("");
    const handleChange = (event) => {
        setAddress(event.target.value);
    };
    return (
        <>
            {addressForm.map((form) => (
                <FormControl key={form.id} fullWidth sx={{ margin: "8px 0" }}>
                    <TypographyFormTitle>{form.title}</TypographyFormTitle>
                    <Select
                        defaultValue={form.placeholder}
                        value={address}
                        onChange={handleChange}
                        displayEmpty
                        sx={{ margin: "8px 0" }}
                    >
                        <MenuItem value="">
                            <em>{form.placeholder}</em>
                        </MenuItem>
                        <MenuItem value="10">{form.item1}</MenuItem>
                        <MenuItem value="20">{form.item2}</MenuItem>
                    </Select>
                </FormControl>
            ))}
        </>
    );
};

export default AddressBoxForm