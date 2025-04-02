import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Main() {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover' src='img' />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-max m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-blue-950 justify-self-center'>
            I'm Eric Nguyen
          </h1>
          <h2 className='flex sm:text-3xl text-2xl text-blue-800'>
            I'm a
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                1500,
                'Cloud Analytics Engineer',
                1500,
                'Hobbyist Gardener',
                1500,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-center pt-6 max-w-sm w-full gap-7'>
            <FaLinkedin className='cursor-pointer hover:scale-110' size={20} />
            <FaGithub className='cursor-pointer hover:scale-110' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
