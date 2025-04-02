import React from 'react';

export interface ProjectItemProps {
  id: number;
  img: string;
  title: string;
  content: string;
}

export function ProjectItem(props: ProjectItemProps) {
  return (
    <div className=' flex items-center justify-center h-auto w-full '>
      <div className='grid sm:grid-cols-2 gap-12'>
        <p>{props.content}</p>
        <img
          src={props.img}
          alt={props.title}
          className='rounded-xl group-hover:opacity-10'
        ></img>
      </div>
      <div>
        <h3></h3>
      </div>
    </div>
  );
}
