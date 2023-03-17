import styled from "styled-components"
import { Container } from "../styles/reusable-styles";

export default function footer() {

    return (
        <FooterSection>
            <Container>
                <FooterWrapper>
                    <ContentWrap>
                        <LogoWrap>
                            <Logo src="/logo/illlustration-vector.svg" />
                        </LogoWrap>
                        <Text>
                            Crafted by
                            <span className="author"> realvjy </span> at
                            <span className="logo_wrap">
                                <OverlayzLogo
                                    src="/logo/overlayz-vector.svg"
                                />
                            </span>
                        </Text>
                        <BtnWrap>
                            <Btn> Twitter </Btn>
                            <Btn> License </Btn>
                            <Btn> Privacy </Btn>
                        </BtnWrap>
                    </ContentWrap>
                </FooterWrapper>
            </Container>
        </FooterSection>
    )
}

const FooterSection = styled.section`
    font-family: 'Outfit', sans-serif;
    margin-top: 200px;
    margin-bottom: 100px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.smallScreen}){
        margin-top: 100px;
    }
`;

const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const LogoWrap = styled.a`
    display: flex;
    justify-content: center;
`;
const Logo = styled.img`
    max-height: 24px
`;

const Text = styled.p`
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.theme.colors.light_gray};

    .author{
        font-weight:600;
        color: ${props => props.theme.colors.light_gray};;
        margin: 0 6px;
    }

    .logo_wrap{
        margin-left: 6px;
    }
`;

const OverlayzLogo = styled.img`
    height: 15px;
`;

const BtnWrap = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction:row;
`;
const Btn = styled.div`
    cursor: pointer;
    margin-left: 10px;
    color: ${props => props.theme.colors.light_gray};
    &:hover{
        text-decoration: underline;
    }

`



