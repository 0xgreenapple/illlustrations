import Layout from "../components/layout";
import styled from "styled-components";
import { Button, Container } from "../styles/reusable-styles";
import { getSortedPostsData } from "../templates/blog-post"
import Image from "next/image";
import Head from "next/head";
import Illlustrations from "../components/illlustrations";

export async function getStaticProps() {
    const illlustrations = getSortedPostsData();
    return {
        props: {
            illlustrations,
        },
    }
}


export default function illustrations({ illlustrations }) {
    return (
        <Layout>
            <MetaSection>
                <Container>
                    <MetaWrapper>
                        <ContentWrap>
                            <FreeBtn>FREE</FreeBtn>
                            <Header> open source illlustrations </Header>
                            <P>Designed all 100 awesome illustrations during 100 days of illustration challange. You can use these any where landing pages, mobile app or persentations.</P>
                            <ButtonWrap>
                                <Btn className="first-btn">EPS, AI & SVG</Btn>
                                <Btn>png</Btn>
                                <Btn>figma</Btn>
                            </ButtonWrap>
                        </ContentWrap>
                    </MetaWrapper>
                </Container>
            </MetaSection>
            <Illlustrations data={illlustrations} />
        </Layout>
    )

}

const MetaSection = styled.section`
    padding-top: 20px;
    background: ${({ theme }) => theme.colors.background_white}
`;
const MetaWrapper = styled.div`
    display:flex;
`;
const ContentWrap = styled.div`
`;
const Header = styled.div`
    margin-top: 10px;
    font-weight: 700;
    font-size: 44px;
    line-height: 110%;
`;
const FreeBtn = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    padding: 2px 10px;
    background: black;
    border-radius: 18px;
    color: white;
`;
const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: rgba(0, 0, 0, 0.66);
    margin-top: 16px;
    max-width: 650px;
`;
const ButtonWrap = styled.div`
    display: flex;
    margin: 30px 0;
    margin-bottom: 50px;
    .first-btn{
        margin: 0px;
    }
`;

const Btn = styled(Button)`
    margin-left: 20px;
    padding-top: 11px;
    padding-bottom: 11px;
`;

