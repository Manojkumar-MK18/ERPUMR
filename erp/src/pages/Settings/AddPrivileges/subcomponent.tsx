import styled from "styled-components";

interface CheckBoxProps {
    justifyContent?: string
    noPadding?: boolean
}

export const TableDisplayWrapper = styled.div`
    display: flex; 
`
export const CheckBoxWrapper = styled.div<CheckBoxProps>`
 display:flex;
 flex-wrap: wrap;
 ${({ justifyContent }) =>
        justifyContent && `justify-content: ${justifyContent};`
    }
     padding: ${({ noPadding }) => (noPadding ? '0' : '12px 0')};
 #check{
     display: flex;
     padding: 2px; 
 }
`