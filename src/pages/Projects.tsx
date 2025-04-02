import React from 'react';
import { ProjectItem , ProjectItemProps} from '../components/ProjectItem';

const projectData: ProjectItemProps[] = [
  {
    id:0,
    img: 'https://i.ibb.co/JrZ7rw3/images.jpg',
    title: ' placeholder 1',
    content : ' Place holder 1'
  },
  {
    id:1,
    img: 'https://i.ibb.co/JrZ7rw3/images.jpg',
    title: ' placeholder 1',
    content : ' Place holder 1'
  },
  {
    id:2,
    img: 'https://i.ibb.co/JrZ7rw3/images.jpg',
    title: ' placeholder 1',
    content : ' Place holder 1'
  },
]

export function Projects() {
  const listProjectItems = projectData.map(item =>(
      <li key = {item.id}>
         <ProjectItem
            id = {item.id}
            title={item.title}
            img={item.img}
            content={item.content}
          />
      </li>
    ))

  return (
    <div id='projects' className='sectionNew'>
      <h1 className='sectionTitle'>Projects</h1>
      <p className='text-center py-8 text-blue-800'>
        These are my personal projects as well as (with
        permission from contractors) some of my freelance work.
      </p>
      <div className='grid sm:grid-cols-1 gap-4'>
        <ul>{listProjectItems}</ul>
      </div>
    </div>
  );
}
