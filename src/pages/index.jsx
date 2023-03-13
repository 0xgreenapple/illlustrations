import styled from "styled-components";
import Layout from "../components/layout";
import { Container } from "../styles/reusable-styles";

export default function Home(){
    return (
    <Layout>
        <MetaSection>
            <Container>
                <MetaWrap>
                    <ContentWrap>
                        <h1>
                                Imagine more with <span>open-source</span> & <span>premium</span> illlustrations.
                        </h1>
                        <Text>
                            Perfect place for creatives to find the perfect illustration for their project, whether they need a free resource or are willing to invest in a high-quality, premium one.
                        </Text>
                    </ContentWrap>
                    <PosterWrap>
                        <Poster src="/images/sketchbook.png"/>
                    </PosterWrap>
                </MetaWrap>
            </Container>
        </MetaSection>
    </Layout>
    )
}

const MetaSection = styled.section`
    background: ${({ theme }) => theme.colors.background_white};
    font-family: 'Outfit', sans-serif;
`;

const MetaWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;
const ContentWrap = styled.div`
    h1{
        font-weight: 500;
        font-size: 35px;
        line-height: 130%;
    }
`;
const PosterWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px;
`;
const Poster = styled.img`
    max-height: 352px;
`;
const Text = styled.p`
     color: ${props => props.theme.colors.light_gray};
     max-width: 500px;
     font-weight: 400;
    font-size: 21px;
    line-height: 140%;
`;