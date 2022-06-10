import { TitleStyled, SubTitle } from "./Title.style";

interface TitleProps{
    title: string;
    subTitle?: string | JSX.Element;
}

export const Title = (props: TitleProps)=>{
    return(
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <SubTitle>{props.subTitle}</SubTitle>
        </>
    )
}