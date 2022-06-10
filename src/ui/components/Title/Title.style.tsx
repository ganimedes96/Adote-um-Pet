import {styled} from '@mui/material'



export const TitleStyled = styled('h1')`
    font-family: Roboto;
    font-size: 20px;
    text-align: center;
    margin-top: ${({theme})=> theme.spacing(5)}
    
`

export const SubTitle = styled('h2')`
    font-size: 18xp;
    text-align: center;
    margin-bottom: ${({theme})=>theme.spacing(5)};
    color: ${({theme})=> theme.palette.text.secondary};
    font-weight: normal;
    font-family: Roboto;
`