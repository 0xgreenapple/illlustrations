import React from "react"

export default function Footer(){
    return (
        <footer className="container footer">
            <div className="dev-credit">
                <div className="logo">
                    <div className="nav">
                        <a href="/"><img src="/logo-foot.svg" /></a>
                    </div>
                    <div className="menu">
                        <a href="/license">Free for Commercial and Personal Use</a>
                    </div>
                </div>
                <h3>Design & develop <a href="https://vijayverma.co/?ref=illlustrations">vijay verma</a> </h3>
                <ul className="scl-lnk">
                    <li><a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg" /></a></li>
                    <li><a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg" /></a></li>
                    <li><a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg" /></a></li>
                </ul>
            </div>
        </footer>
    )
}

