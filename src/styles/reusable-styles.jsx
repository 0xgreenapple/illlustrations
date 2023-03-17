import styled from "styled-components";


export const Container = styled.div`
    margin: 0 auto;
    max-width: 980px;
    @media screen and (max-width: ${props => props.theme.deviceSize.desktop}) {
        padding: 0 24px;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const FlexBoxRow = styled(FlexBox)`
    flex-direction: row;
`;
export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.figma_plugin};
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 16px 34px;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    text-transform: uppercase;
    box-shadow: 2px 2px 0 black;
    cursor: pointer;
    -webkit-transition: all 0.5s cubic-bezier(0.3, -0.01, 0.01, 0.99);
    transition: all 0.5s cubic-bezier(0.3, -0.01, 0.01, 0.99);
    &:hover{
        box-shadow: none;
    }
    &.install{
        background: black;
        color: white;
    }
    &.figma{
        box-shadow: none;
    }
    &.know-more{
        margin-left:10px;
        color: black;
        background: white;
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.smallScreen}){
        font-size: ${({ theme }) => theme.fontSize.mobileBtn};
        padding: 9px 19px;
    }
`;
