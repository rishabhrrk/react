import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Site.css";

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
        <div key={idx} className="col">
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">
                {portfolioItem.name}
              </h2>
              <span>{portfolioItem.description}</span>
              <ul style={{
                      display: "flex",
                      flexWrap:"wrap",
                      flexDirection: "flex-row",
                      textAlign:"center",
                    }}
              >
                {portfolioItem.technologies.map((tech, i) => {
                  return (
                    <li>
                      <p>#{tech}</p>
                    </li>
                  );
                })}
              </ul>
              <a
                className="card-action"
                href={portfolioItem.url}
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                className="card-action"
                href={portfolioItem.youtube}
                target="_blank"
              >
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <h1>Check out some of my work</h1>

        <div className="row">
          {portfolioItems}
        </div>
      </section>
    );
  }
}

// export default class Porfolio extends Component {
//   render() {
//     let resumeData = this.props.resumeData;

//     /*
//     "name":"Nitrogen Rate Predictor",
//         "description":"A web portal and an android app that provides the appropriate nitrogen rate that should be used by the Maine farmers for growing potato. The prediction of nitrogen rate is based on a linear regression model",
//         "technologies":["React", "React-Native", "Nodejs", "Express", "Postgresql"],
//         "imgurl":"images/portfolio/phone.jpg",
//         "url":"https://github.com/rishabhrrk/nrate/"
//         */

//     const portfolioItems = resumeData.portfolio.map((portfolioItem, idx) => {
//       return (
//         <div key={idx} style={{ width: "33%", padding: "2rem" }}>
//           <div
//             style={{
//               position: "relative",
//               backgroundColor: "white",
//               padding: "2rem",
//               height: "100%",
//             }}
//           >
//             <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "2rem",
//                 color: "#313131",
//               }}
//             >
//               {portfolioItem.name}
//             </h2>
//             <p style={{
//               textAlign:"justify",
//             }}>{portfolioItem.description}</p>
//             <ul
//               style={{
//                 display: "flex",
//                 flexWrap:"wrap",
//                 flexDirection: "flex-row",
//                 textAlign:"center",
//               }}
//             >
//               {portfolioItem.technologies.map((tech, i) => {
//                 return (
//                   <li
//                     key={i}
//                     style={{
//                       flex: "1 0 30%",
//                       padding: "2%",
//                       fontSize: "1.35rem",
//                     }}
//                   >
//                     <p>#{tech}</p>
//                   </li>
//                 );
//               })}
//             </ul>
//             <a
//               style={{
//                 position: "absolute",
//                 bottom: "0%",
//                 left: "0%",
//                 padding: "1rem",
//               }}
//               href={portfolioItem.url}
//               target="_blank"
//             >
//               <i className="fa fa-github" aria-hidden="true"></i>
//             </a>
//             <a
//               style={{
//                 position: "absolute",
//                 bottom: "0%",
//                 right: "0%",
//                 padding: "1rem",
//               }}
//               href={portfolioItem.youtube}
//               target="_blank"
//             >
//               <i className="fa fa-youtube-play" aria-hidden="true"></i>
//             </a>
//           </div>
//         </div>
//       );
//     });

//     return (
//       <section id="portfolio">
//         <h1>Check out some of my work</h1>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "flex-row",
//             flexWrap: "wrap",
//             padding: "1rem",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           {portfolioItems}
//         </div>
//       </section>
//     );
//   }
// }

