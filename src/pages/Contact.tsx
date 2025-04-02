import React from 'react';
import { useForm } from 'react-hook-form';




export function Contact() {
  const {register , handleSubmit,formState : {errors}} = useForm();
  const onSubmit = (data) => {console.log(data)}

  return (
    <div id='register ' className='sectionNew'>
      <h1 className='sectionTitle'>Contact</h1>
      <p className='text-center py-8 font-semibold text-blue-800'>
        Please send me a message below if you have any query regarding
        recruiment/work. Thank you 🙇
      </p>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 font-semibold italic text-blue-900'>
              Name
            </label>
            <input
              className='border-2 rounded-lg p-4 flex border-blue-300 '
              type='text'
              id='name'
              placeholder='FirstName McLastName'
              autoComplete='off'
              {...register('name' , {required:true})}
            />
            {errors.name && <p>Name is required.</p>}
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 font-semibold italic text-blue-900'>
              Company/Agency
            </label>
            <input
              className='border-2 rounded-lg p-4 flex border-blue-300 '
              type='text'
              id='company'
              placeholder='The Krusty Krab'
              autoComplete='off'
              {...register('company' , {required:true})}
            />
            {errors.company && <p>Company is required.</p>}
          </div>
        </div>
        <div className='flex flex-col py-2  '>
          <label className='uppercase text-sm py-2 font-semibold italic text-blue-900'>
            Email
          </label>
          <input
            className='border-2 rounded-lg p-4 flex border-blue-300 '
            type='email'
            id='email'
            placeholder='yourEmail@coolCompany.com'
            autoComplete='off'
            {...register('email' , {
              required:true ,   
              pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }})}
          />
          {errors.company && <p>Company is required.</p>}
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 font-semibold text-blue-900  italic'>
            Message
          </label>
          <textarea
            className='border-2 rounded-lg p-4 flex border-blue-300 '
            rows={10}
            id='message'
            placeholder='Shoot me a message :D'
            autoComplete='off'
            {...register('message' )}
          />
        </div>
        <input
          type='checkbox'
          name='contact_me_by_fax_only'
          value='1'
          className='!invisible'
          tabIndex={-1}
          autoComplete='off'
        />
        <button className='bg-blue-950 text-gray-200 mt-4 w-full p-4 rounded-lg' >
          Send message
        </button>
      </form>
    </div>
  );
}
