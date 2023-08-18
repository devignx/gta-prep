import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    workTimings: '',
    companyName: '',
    department: '',
    role: '',
  });

  const workTimingsOptions = [
    '9:00 AM - 5:00 PM',
    '10:00 AM - 6:00 PM',
    'Flexible',
    'Other',
  ];

  const departmentOptions = [
    'Engineering',
    'Marketing',
    'Sales',
    'Finance',
    'HR',
    'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
    createUserWithEmailAndPassword(auth, 'akhilesh@gmail.com', '123456')
    .then((cred)=> {
        console.log(cred)
    })
    .catch((err)=> {
      console.log(err)
    })
  };

  return (
    <div className='flex  justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <form onSubmit={handleSubmit}>
          {/* ... other fields ... */}
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='name'
              id='name'
              placeholder='Full Name'
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='phoneNumber'
            >
              Phone Number
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='tel'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Phone Number'
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='companyName'
            >
              Company Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='companyName'
              id='companyName'
              placeholder='Company Name'
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='department'
            >
              Department
            </label>
            <select
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='department'
              id='department'
              onChange={handleInputChange}
              value={formData.department}
            >
              <option value=''>Select Department</option>
              {departmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='workTimings'
            >
              Work Timings
            </label>
            <select
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='workTimings'
              id='workTimings'
              onChange={handleInputChange}
              value={formData.workTimings}
            >
              <option value=''>Select Work Timings</option>
              {workTimingsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleSubmit}
            className='px-2 py-1 mx-auto text-white bg-green-400'
            type='submit'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
