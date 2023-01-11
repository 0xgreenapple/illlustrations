import React from "react"

export default function Challange({data}){


  return (
    <section className="illus">
      <div className="container">
        <div className="title">
          <h1>Explore all</h1>
        </div>
        <div className="illus-wrap">
          {data.map(( node ) => {
          const title = node.title
          console.log(node.png);
          return (
            <div className="day-box">
              <div className="i-wrap">
                <div className="img">
                  <img src={node.png}/>
                </div>
                <div className="info">
                  <h5>{title}</h5>
                  { node.tags.includes('sold')?
                  <div className="btns sold"><h4>Not available</h4></div>
                  : <div className="btns">
                    <a href={node.svg} download className="btn-svg">SVG</a>
                    <a href={node.png} download className="btn-png">PNG</a>
                  </div>
                  }
                </div>

              </div>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}

