import Link from "next/link";
import styled from "styled-components"
import { Container } from "../styles/reusable-styles";

function header() {
    return (
        <HeaderSection>
            <HeaderContainer>
                <Wrapper>
                    <LeftWrapper>
                        <ImgWrapper href="/">
                            <Image src="/logo/header-logo.png" />
                        </ImgWrapper>
                    </LeftWrapper>
                    <RightWrapper>
                        <Button href="/illlustrations">
                            explore all
                        </Button>
                        <Button href="/illlustrations">
                            figma
                        </Button>
                        <MediaBtn href="/illlustrations">
                            Share on twitter
                            <span>
                                <img src="/logo/twitter-fill.png" />
                            </span>
                        </MediaBtn>
                        <CoffeeBtn href="/illlustrations">
                            Buy me coffee
                        </CoffeeBtn>

                    </RightWrapper>
                </Wrapper>
            </HeaderContainer>
        </HeaderSection>
    )
}

const HeaderSection = styled.section`
    text-decoration: none;
    background: ${({ theme }) => theme.colors.background_white};
`;
const HeaderContainer = styled(Container)`
    max-width: 1350px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 26px;
    @media screen and (max-width:${({ theme }) => theme.deviceSize.desktop} ) {
        padding: 26px 0;
    }
`;
const LeftWrapper = styled.div`
    display: flex;
`;
const RightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`;
const Button = styled(Link)`
    margin-left: 30px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}){
        display: none;
    }
`;

const MediaBtn = styled(Button)`
    border-radius: 12px;
    background: white;
    border: 1px solid black;
    padding: 12px;
    font-weight: 500;
    span{
        margin-left: 10px;
        img{
            max-height: 15px;
        }
    }
    &:hover{
        text-decoration: none;
    }
`;

const CoffeeBtn = styled(MediaBtn)`
    background: black;
    color: white;
`
const ImgWrapper = styled(Link)`
    text-decoration: none;
`;
const Image = styled.img`
    max-height: 35px;
`;

export default header;



