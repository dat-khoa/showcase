import React from 'react';

export interface WorkItemProps {
  id: number;
  year: number;
  title: string;
  length: string;
  company: string;
  responsibility: string;
}

export function WorkItem(props: WorkItemProps) {
  return (
    <div>
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-6'>
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-blue-950 rounded-md'>
              {props.year}
            </span>
            <span className='text-lg font-semibold text-blue-800'>
              {props.title}
            </span>
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>
              {props.length}
            </span>
          </p>
          <p className='my-1 text-md font-normal leading-none text-sky-400/100'>
              {props.company}
            </p>
          <p className='my-2 text-base font-normal text-stone-600 text-justify'>
            {props.responsibility}
          </p>
        </li>
      </ol>
    </div>
  );
}
