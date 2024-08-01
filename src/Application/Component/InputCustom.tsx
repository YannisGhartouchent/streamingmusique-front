import React from "react";
import {Input, MantineRadius, MantineSpacing, } from '@mantine/core';



type InputCustomPropsType = {
    disabled?: boolean
    error?: React.ReactNode
    radius?: MantineRadius
    placeholder?: string
    label?: string
    mb?: MantineSpacing
    mt?: MantineSpacing
    ml?: MantineSpacing
    mr?: MantineSpacing
    withAsterisk?: boolean
   
}
   

export const InputCustom: React.FC<InputCustomPropsType> = ({
    label,
    mb,
    mt,
    ml,
    mr,
    withAsterisk,
    disabled = false,
    error,
    radius = "md",
    placeholder,
    
    
    
    
    
}) => {
    return (
      
        
        <Input.Wrapper withAsterisk={withAsterisk} label={label} mb={mb} mt={mt} mr={mr} ml={ml}>
            <Input disabled={disabled} error={error} radius={radius} placeholder={placeholder} />
        </Input.Wrapper>
        
       
        )
    };
