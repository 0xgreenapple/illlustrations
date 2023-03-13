import styled from "styled-components"
import { Container } from "../styles/reusable-styles";

function header(){
    return(
        <HeaderSection>
            <HeaderContainer>
                <Wrapper>
                    <LeftWrapper>
                        <ImgWrapper>
                            <Image src="/logo/header-logo.png"/>
                        </ImgWrapper>
                    </LeftWrapper>
                    <RightWrapper>
                        <Button>
                            explore all
                        </Button>
                        <Button>
                            figma
                        </Button>
                        <MediaBtn>
                            Share on twitter
                        </MediaBtn>
                        <CoffeeBtn>
                            Buy me coffee
                        </CoffeeBtn>
                    </RightWrapper>
                </Wrapper>
            </HeaderContainer>
        </HeaderSection>
    )
}

const HeaderSection = styled.section`
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
const Button = styled.a`
    margin-left: 30px;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

const MediaBtn = styled(Button)`
    border-radius: 12px;
    background: white;
    border: 1px solid black;
    padding: 12px;
    font-weight: 500;
    &:hover{
        text-decoration: none;
    }
`;

const CoffeeBtn = styled(MediaBtn)`
    background: black;
    color: white;
`
const ImgWrapper = styled.a``;
const Image = styled.img`
    max-height: 35px;
`;
export default header;

