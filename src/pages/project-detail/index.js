import "./project-detail.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ProjectContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Page404 from "../404Page";
import projects from "../../assets/js/projects-data";

const ProjectDetail = () => {
  const { projectDetail: p, setProjectDetail } = useContext(ProjectContext);
  const [nums, setNums] = useState([]);
  const navigate = useNavigate();
  const active = !Object.keys(p).length;

  useEffect(() => {
    setNums([...getRandomNumbers()]);
  }, []);

  const getProjectDetail = (n) => {
    setProjectDetail(projects[n]);
    navigate(`/project/${projects[n].id}`);
  };

  return (
    <div>
      {!active ? (
        <>
          <Header bg="white" />

          {/* EACH PROJECT DETAIL START */}
          <div className="projectDetail">
            <img
              className="projectDetail__main-img"
              src={`/assets/${p.img}`}
              alt="project details"
            />
            <article className="projectDetail__some-detail">
              <div className="projectDetail__detail-block">
                <h2>Category:</h2>
                <p>{p.project_detail.category}</p>
              </div>
              <div className="projectDetail__detail-block">
                <h2>Client:</h2>
                <p>{p.project_detail.client}</p>
              </div>
              <div className="projectDetail__detail-block">
                <h2>Date:</h2>
                <p>{p.project_detail.date}</p>
              </div>
              <div className="projectDetail__detail-block">
                <h2>Location:</h2>
                <p>{p.project_detail.location}</p>
              </div>
            </article>
            <div className="projectDetail__paragraph">
              <h2>01. The Challenge</h2>
              <p>{p.project_detail.challenge}</p>
            </div>
            <div className="projectDetail__paragraph">
              <h2>02. The Solution </h2>
              <p>{p.project_detail.solution}</p>
            </div>
            <div className="projectDetail__paragraph">
              <h2>03. The Result </h2>
              <p>{p.project_detail.result}</p>
            </div>
            <article className="projectDetail__images">
              <img
                src={`/assets/${p.project_detail.images[0]}`}
                alt="project details"
              />
              <img
                src={`/assets/${p.project_detail.images[1]}`}
                alt="project details"
              />
              <img
                src={`/assets/${p.project_detail.images[2]}`}
                alt="project details"
              />
            </article>
          </div>
          {/* EACH PROJECT DETAIL END */}

          {/* RECENT PROJECT DETAIL START */}
          <section className="recentProjects">
            <h1>Recent Projects</h1>
            <section className="recentProjects__block">
              {nums.map((n) => (
                <article
                  key={n}
                  className="recentProjects__project"
                  onClick={() => getProjectDetail(n)}
                >
                  <img src={`/assets/${projects[n].img}`} alt="project" />
                  <h2>{projects[n].title}</h2>
                  <p>{projects[n].info}</p>
                </article>
              ))}
            </section>
          </section>
          {/* RECENT PROJECT DETAIL END */}

          <Footer />
        </>
      ) : (
        <Page404 />
      )}
    </div>
  );
};

export default ProjectDetail;

// generating three unique random numbers
function getRandomNumbers() {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < 3) {
    const randomNumber = Math.floor(Math.random() * 6);
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
}
