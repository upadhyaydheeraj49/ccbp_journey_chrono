// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {title, projectTitle, description, imageUrl, duration, projectUrl} =
    projectDetails
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="top-row-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="calender-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
