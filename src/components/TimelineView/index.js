// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const titleList = timelineItemsList.map(item => ({title: item.title}))
  const itemViewList = timelineItemsList.map(item => {
    const {categoryId} = item
    return categoryId === 'PROJECT' ? (
      <ProjectTimelineCard key={item.id} projectDetails={item} />
    ) : (
      <CourseTimelineCard key={item.id} courseDetails={item} />
    )
  })
  return (
    <div className="main-container">
      <h1 className="my-journey-heading">
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <h1 className="ccbp-top-heading">CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={titleList}>
          {itemViewList}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
