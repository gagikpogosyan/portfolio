import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectsList";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnVercel from "../components/btnVercel/btnVercel";

const Project = () => {
  const { id } = useParams(0);
  const project = projects[id];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          {project.vercelLink && <BtnVercel link={project.vercelLink} />}
        </div>
      </div>
    </main>
  );
};

export default Project;
