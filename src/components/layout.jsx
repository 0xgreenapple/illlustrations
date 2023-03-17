import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

export default function layout({ children }) {
    return (
        <Main>
            <Header />
            {children}
            <Footer />
        </Main>
    )
}

const Main = styled.main`
    min-height: 100vh;
    color: black;
`