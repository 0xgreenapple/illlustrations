import styled from "styled-components";
import Layout from "../components/layout";
import { Container, FlexBox, FlexBoxRow } from "../styles/reusable-styles";

export default function Home() {

    return (
        <Layout>
            <MetaSection>
                <Container>
                    <MetaWrap>
                        <ContentWrap>
                            <Header>
                                Imagine more with <span className="open-source">open-source <img src="/images/yellow-vector.svg" /></span> & <span>premium <img src="/images/green-vector.svg" /></span> illlustrations.
                            </Header>
                            <Text>
                                Perfect place for creatives to find the perfect illustration
                                for their project, whether they need a free resource or are
                                willing to invest in a high-quality, premium one.
                            </Text>
                            <ButtonWrap>
                                <Button>
                                    Browse all
                                </Button>
                                <Plugin>
                                    PLUGIN
                                    <span>
                                        <img src="/logo/figma.png" />
                                    </span>
                                </Plugin>
                            </ButtonWrap>
                        </ContentWrap>
                        <PosterWrap>
                            <Poster src="/images/sketchbook.png" />
                        </PosterWrap>
                    </MetaWrap>
                </Container>
            </MetaSection>
            <ProductSection>
                <Container>
                    <ProductWrap>
                        <TopWrap>
                            <Illustration>
                                <Content>
                                    <PoductMeta>
                                        <a className="free-btn">
                                            Free
                                        </a>
                                        <h1>
                                            open source
                                            illlustrations
                                        </h1>
                                        <p>
                                            120+ illustrations
                                        </p>
                                        <BtnWrap>
                                            <SvgBtn>
                                                svg
                                            </SvgBtn>
                                            <Btn>
                                                png
                                            </Btn>
                                            <Btn>
                                                figma
                                            </Btn>
                                        </BtnWrap>
                                    </PoductMeta>
                                    <ImgWrap>
                                        <img src="images/stuffs.png" />
                                    </ImgWrap>
                                </Content>
                            </Illustration>
                            <Croods>
                                <Content>
                                    <PoductMeta>
                                        <a className="free-btn">
                                            Free
                                        </a>
                                        <h1>
                                            open source
                                            illlustrations
                                        </h1>
                                        <p>
                                            120+ illustrations
                                        </p>
                                        <BtnWrap>
                                            <SvgBtn>
                                                svg
                                            </SvgBtn>
                                            <Btn>
                                                png
                                            </Btn>
                                            <Btn>
                                                figma
                                            </Btn>
                                        </BtnWrap>
                                    </PoductMeta>
                                    <ImgWrap>
                                        <img src="images/croods.png" />
                                    </ImgWrap>
                                </Content>
                            </Croods>
                        </TopWrap>
                        <BottomWrap>
                            <Figma>
                                <TextWrap>
                                    <LogoHeadWrap>
                                        <LogoWrap className="yui">
                                            <img src="/logo/illustration-black.svg" />
                                        </LogoWrap>
                                        <NewBtn>
                                            1.0
                                        </NewBtn>
                                    </LogoHeadWrap>
                                    <FigmaLogoWrap>
                                        <img src="/logo/figma-plugin-wrap.svg" />
                                    </FigmaLogoWrap>
                                    <ProductText>
                                        Insert all illustrations from illustrations.co library,
                                        directly in your Figma and FigJam files as SVG/Vector.
                                    </ProductText>
                                    <ButtonWrap>
                                        <Button className="install figma">
                                            hello world
                                        </Button>
                                        <Button className="know-more figma">
                                            Again
                                        </Button>
                                    </ButtonWrap>
                                </TextWrap>
                                <FigmaImgWrap>
                                    <FigmaImg src="/images/plugin-poster.png" />
                                </FigmaImgWrap>
                            </Figma>
                        </BottomWrap>
                    </ProductWrap>
                </Container>
            </ProductSection>
        </Layout>
    )
}

const MetaSection = styled.section`
    background: ${({ theme }) => theme.colors.background_white};
    font-family: 'Outfit', sans-serif;
    padding: 100px 0;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.smallScreen}) {
        padding-top: 30px ;
    }
`;

const MetaWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;
const ContentWrap = styled.div`
    max-width: 600px;
`;

const Header = styled.h1`
    font-weight: 500;
    font-size: 42px;
    line-height: 130%;
    span{
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        img{
            max-width: 180px;
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.smallScreen}) {
        font-size: 30px;
        span{
            img{
                max-width: 100px;
            }
        }
    }
`;

const PosterWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
`;
const Poster = styled.img`
    max-height: 352px;
     @media screen and (max-width: ${({ theme }) => theme.deviceSize.smallScreen}) {
        display: none;
    }
`;
const Text = styled.p`
    color: ${props => props.theme.colors.light_gray};
    max-width: 500px;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    padding-top: 20px;
    @media screen and (max-width:${({ theme }) => theme.deviceSize.smallScreen}){
        font-size:${({ theme }) => theme.fontSize.mobileText}
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    margin-top: 20px;
`;
const Button = styled.a`
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

const Plugin = styled(Button)`
    background: ${({ theme }) => theme.colors.dark_plugin_background};
    color: white;
    margin-left: 12px;

    span{
        margin-left: 5px;
        img{
            max-height: 18px;
        }
    }
`;

const ProductSection = styled.section`
    margin-top: 100px;
    @media screen and (max-width: ${props => props.theme.deviceSize.smallScreen}){
        margin-top: 37px;
    }
`;

const ProductWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 16px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.smallScreen}) {
        grid-template-columns: 1fr;
    }
`;

const BottomWrap = styled.div``;

const Product = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    border-radius: 32px;
    max-width: 500px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.smallScreen}) {
        max-width: 100%;
        width: 100%;
    }
`;

const Illustration = styled(Product)`
    background: ${props => props.theme.colors.illlustrations}
`;

const Croods = styled(Product)`
    background: ${props => props.theme.colors.croods}
`;

const Figma = styled(Product)`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    margin-top: 16px;
    .fimga-image{
        margin: 0%;
    }
    background:${props => props.theme.colors.figma_plugin};
    @media screen and (max-width: ${props => props.theme.deviceSize.smallScreen}){
        flex-direction: column;
    }
`;

const Content = styled.div`
    margin: 40px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ImgWrap = styled(FlexBox)`
    margin-top: 58px;
    img{
        max-width: 100%;
    }
`;

const FigmaImgWrap = styled(ImgWrap)`
    margin: 0px;
    overflow: hidden;
`;
const FigmaImg = styled.img`
    max-width: 100%;
    margin-bottom: -70px;
    max-height: 484px;
    @media screen and (
        max-width: ${({ theme }) => theme.deviceSize.tablet}
        ) and (min-width: ${({ theme }) => theme.deviceSize.smallScreen})
         {
            margin-bottom: 0;
    }
`;

const PoductMeta = styled(FlexBox)`
    max-width: 216px;

    .free-btn{
        background: black;
        text-align: center;
        border-radius: 10px;
        color: white;
        font-weight: 300;
        text-transform: uppercase;
        padding: 2px 5px;
    }
    h1{
        text-align: center;
        font-weight: 700;
        font-size: 32px;
        line-height: 110%;
    }
    p{
        margin-top: 10px;
        color: black;
        opacity: 55%;
    }
`;

const BtnWrap = styled(FlexBoxRow)`
    margin-top: 10px;
`;

const Btn = styled.a`
    cursor: pointer;
    background: white;
    margin-left: 8px;
    border-radius: 10px;
    padding: 4px 8px;
    color: ${({ theme }) => theme.colors.dark_gray_text};
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 300;
`;
const SvgBtn = styled(Btn)`
    margin-left: 0%;
`
const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
`;
const LogoHeadWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
   
`;
const LogoWrap = styled.a`
    max-height: 35px;
`;
const NewBtn = styled.a`
    font-size: 14px;
    background: black;
    color: white;
    border-radius: 13px;
    padding: 6px 8px;
    text-align: center;
    margin-left: 10px;
`;
const FigmaLogoWrap = styled.a`
    display: flex;
    margin-top: 10px;
    text-align: left;
    
    img{
        max-height: 65px;
        max-width: 100%;
    }
`;
const ProductText = styled.p`
    font-weight: 400;
    font-size: 21px;
    line-height: 140%;
    color: ${props => props.theme.colors.dark_gray_text};
    max-width: 414px;
    margin-top: 7px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.smallScreen}){
        font-size: ${({ theme }) => theme.fontSize.mobileText}
    }
`;