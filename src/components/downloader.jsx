import { Component } from "react";
import styled from "styled-components";



class Downloader extends Component {
    constructor(props) {
        super(props);
    }

    handelDownload = (type) => {
        const {node} = this.props
        const link = document.createElement('a');
        link.download = 'image.'+type;
        link.href = type==="png"? node.png: node.svg;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    render() {
        return (
            <DownloaderWrapper className="downloader">
                <SvgBtn
                    className="svg btn"
                    onClick={() => this.handelDownload("svg")}>
                    svg
                </SvgBtn>
                <PngBtn
                    className="png btn"
                    onClick={() => this.handelDownload("png")}>
                    Png
                </PngBtn>
            </DownloaderWrapper>
        )
    }
}

const DownloaderWrapper = styled.div`
    z-index: 999;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
`;

const DownloadBtn = styled.a`
    cursor: pointer;
    font-weight: 600;
    font-size: 21px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: white;
    padding: 4px 18px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.red}
`;

const SvgBtn = styled(DownloadBtn)``;

const PngBtn = styled(DownloadBtn)`
    margin-top: 20px
`;

export default Downloader
