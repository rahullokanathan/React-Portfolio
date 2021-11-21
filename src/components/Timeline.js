import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const Timeline = () =>
{
    return (
        <>
         <div class="text-divider container"> <h3 className='text-center' style={{border:"1px solid silver",padding:'15px'}}>Journey</h3></div>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Technical Writer</h3>

    <p>
      I am currently working as a Technical Writer at Wipro Digital Operations
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017-2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Technical Writer</h3>
    <h5 className="vertical-timeline-element-subtitle">Amazon India</h5>
    <p>
      Worked as a Technical Writer for 4 years in Alexa Data Services
    
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2012- 2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Chemical Engineering</h3>
    <h5 className="vertical-timeline-element-subtitle">Sathyabama University</h5>
    <p>
      Pursued my engineering degree with 7 CGPA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2012 - 2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">GUVI</h3>
    <h5 className="vertical-timeline-element-subtitle">Full Stack Web Development</h5>
    <p>
      Completed my Full Stack Web Development Course Cerification in GUVI
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Schooling</h3>
    <h5 className="vertical-timeline-element-subtitle">Chellamal Vidyalaya CBSE</h5>
    <p>
      Place where I gained knowledge and had a lot of memories to share with!
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
 
  />
</VerticalTimeline>
</>
    )
}
