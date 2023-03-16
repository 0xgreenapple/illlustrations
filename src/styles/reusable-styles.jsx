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
