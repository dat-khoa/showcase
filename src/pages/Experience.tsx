import React from 'react';
import { WorkItem, WorkItemProps } from '../components/WorkItem';

const workItemData: WorkItemProps[] = [
  {
    id:0,
    year: 2024,
    title: 'placeholder title 1',
    length: 'length 1',
    company:'asd',
    responsibility:
      'placeLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit lacus ligula, in lobortis neque finibus et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Pellentesque venenatis finibus nulla, vitae malesuada massa semper nec. Praesent at leo posuere dui malesuada ultricies. Aliquam erat volutpat. Duis ornare tincidunt facilisis. Sed vel pulvinar neque, id viverra risus. Phasellus eleifend condimentum dui, eu sollicitudin lectus varius ac.Phasellus tempor eros et nisi viverra, a lobortis lectus pharetra. Integer imperdiet justo hendrerit lacus sagittis scelerisque. Phasellus vulputate sed neque vitae auctor. Sed id lectus porta, hendrerit orci eu, tempus purus. Etiam non accumsan metus, non efficitur augue. Curabitur aliquam imperdiet vehicula. Praesent suscipit varius egestas. Quisque a laoreet urna. Duis ultricies porta efficiturholder responsibility 1',
  },
  {
    id:1,
    year: 2024,
    title: 'placeholder title 1',
    length: 'length 1',
    company:'asd',

    responsibility:
      'placeLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit lacus ligula, in lobortis neque finibus et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Pellentesque venenatis finibus nulla, vitae malesuada massa semper nec. Praesent at leo posuere dui malesuada ultricies. Aliquam erat volutpat. Duis ornare tincidunt facilisis. Sed vel pulvinar neque, id viverra risus. Phasellus eleifend condimentum dui, eu sollicitudin lectus varius ac.Phasellus tempor eros et nisi viverra, a lobortis lectus pharetra. Integer imperdiet justo hendrerit lacus sagittis scelerisque. Phasellus vulputate sed neque vitae auctor. Sed id lectus porta, hendrerit orci eu, tempus purus. Etiam non accumsan metus, non efficitur augue. Curabitur aliquam imperdiet vehicula. Praesent suscipit varius egestas. Quisque a laoreet urna. Duis ultricies porta efficiturholder responsibility 1',
  },
  {
    id:2,
    year: 2023,
    title: 'Data Migration Engineer Intern',
    length: 'length 2',
    company:'asd',
    responsibility: 'placeholder responsibility 2',
  },
  {
    id:3,
    year: 2022,
    title: 'Full Stack Web Development Intern - ReactJS / NodeJS',
    length: 'July - Dec',
    company:'asd',
    responsibility: 'placeholder responsibility 3',
  },
];


export function Experience() {
  const listWorkItems = workItemData.map(item =>(
    <li key = {item.id}>
       <WorkItem
          id = {item.id}
          year={item.year}
          title={item.title}
          length={item.length}
          responsibility={item.responsibility}
          company={item.company}
        />
    </li>
  ))

  return (
    <div id='experience' className='sectionNew'>
      <h1 className='sectionTitle'>Experience</h1>
        <ul>{listWorkItems}</ul>
      <div></div>
    </div>
  );
}
