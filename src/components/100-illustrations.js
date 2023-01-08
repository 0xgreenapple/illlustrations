import React from "react"

export default function Challange(){
  return (
    <section className="illus">
      <div className="container">
        <div className="title">
          <h1>Explore all</h1>
        </div>
        <div className="illus-wrap">
        {/* {illlus.map(({ node }) => {
          const title = node.frontmatter.title
          return (
            <div className="day-box">
              <div className="i-wrap">

                <div className="img">
                  <img src={node.frontmatter.png.childImageSharp.fluid.src}/>
                </div>

                <div className="info">
                  <h5>{node.frontmatter.title}</h5>
                  { node.frontmatter.tags.includes('sold')?
                  <div className="btns sold"><h4>Not available</h4></div>
                  : <div className="btns">
                    <a href={node.frontmatter.svg.publicURL} download className="btn-svg">SVG</a>
                    <a href={node.frontmatter.png.publicURL} download className="btn-png">PNG</a>
                  </div>

                  }



                </div>

              </div>
            </div>
          )
        })} */}
        </div>
      </div>
    </section>
  )
}

