import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    /*
    "name":"Nitrogen Rate Predictor",
        "description":"A web portal and an android app that provides the appropriate nitrogen rate that should be used by the Maine farmers for growing potato. The prediction of nitrogen rate is based on a linear regression model",
        "technologies":["React", "React-Native", "Nodejs", "Express", "Postgresql"],
        "imgurl":"images/portfolio/phone.jpg",
        "url":"https://github.com/rishabhrrk/nrate/"
        */

    const portfolioItems = resumeData.portfolio.map((portfolioItem, idx) => {
      return (
        <div key={idx} style={{ width: "33%", padding: "2rem" }}>
          <div
            style={{
              position: "relative",
              backgroundColor: "white",
              padding: "2rem",
              height: "100%",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: "#313131",
              }}
            >
              {portfolioItem.name}
            </h2>
            <p>{portfolioItem.description}</p>

            <a
              style={{
                position: "absolute",
                bottom: "0%",
                left:"0%",
                padding: "1rem",
              }}
              href={portfolioItem.url}
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              style={{
                position: "absolute",
                bottom: "0%",
                right:"0%",
                padding: "1rem",
              }}
              href={portfolioItem.youtube}
              target="_blank"
            >
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <h1>Check out some of my work</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "flex-row",
            flexWrap: "wrap",
            padding: "1rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {portfolioItems}
        </div>
      </section>
    );
  }
}

// export default class Porfolio extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
//     return (
//       <section id="portfolio">
//         <div className="row">
//           <div className="twelve columns collapsed">
//             <h1>Check Out Some of My Works.</h1>
//             <div
//               id="portfolio-wrapper"
//               className="bgrid-quarters s-bgrid-thirds cf"
//             >
//               {resumeData.portfolio &&
//                 resumeData.portfolio.map((item) => {
//                   return (
//                     <div className="columns portfolio-item">
//                       <div className="item-wrap">
//                         <a href={item.url}>
//                           {/* <img src={`${item.imgurl}`} className="item-img"/> */}
//                           <div className="overlay">
//                             <div className="portfolio-item-meta">
//                               <h5>{item.name}</h5>
//                               <p>{item.description}</p>
//                               <ul>
//                                 {resumeData.portfolio.technologies &&
//                                   resumeData.portfolio.technologies.map(
//                                     (tech) => {
//                                       return (
//                                         <li key={item.name}>
//                                           <a
//                                             href={tech.technologies}
//                                             target="_blank"
//                                           ></a>
//                                         </li>
//                                       );
//                                     }
//                                   )}
//                               </ul>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }
