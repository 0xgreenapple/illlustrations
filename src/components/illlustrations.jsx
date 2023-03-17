import styled from "styled-components";
import { Container } from "../styles/reusable-styles";
import Image from "next/image";
import Downloader from "./downloader";
export default function illlustrations({ data }) {
    return (
        <Illustrations>
            <Container>
                <IllustrationWrapper>
                    <IllustrationList>
                        {data.map((node) => {
                            return (
                                <Illustration key={node.title}>
                                    <Image
                                        src={node.png}
                                        alt="Picture of the author"
                                        width={236}
                                        height={236}
                                    />
                                    <Downloader node={{ png: node.png, svg: node.svg }} />
                                </Illustration>
                            )
                        })}
                    </IllustrationList>
                </IllustrationWrapper>
            </Container>
        </Illustrations>
    )
}

const Illustrations = styled.section`
    padding-top: 50px;
`;

const IllustrationWrapper = styled.div`
`;

const IllustrationList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 17px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}){
        grid-template-columns: repeat(2,1fr);
    }
`;
const Illustration = styled.li`
    border-radius: 12px;
    display: flex;
    background: red;
    overflow: hidden;
    position: relative;
    .downloader{
        transition: all 0.5s ease-out;
        .btn{
            transform: translateY(-300px);
            &.png{
                transform: translateY(300px);
            }
        }
    }
    img{

        width: 100%;
        height: auto;
        transition: all 0.3s ease-in;
    }
    &:hover{
        .downloader{
            transform: scale(1);
            .btn{
                transform: translateY(0);
            }
        }
        img{
            filter: brightness(0.7)
        }
    }   

`;

