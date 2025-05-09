import React from 'react'
import BackBotton from '../components/BackBotton';
import {Spinner} from '../components/Spinner';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [title, setTitle] = useState(['']);
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () =>{
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
    .post('http://localhost:5000/books', data)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      alert("An error occurred while creating the book. Please try again.");
      console.log(error.message);
    });
  };

  return (
    <div className='p-4'>
      <BackBotton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ' '}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type='text' className='border-2 border-gray-500 rounded-md w-full p-2' 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type='text' className='border-2 border-gray-500 rounded-md w-full p-2' 
          value={author} 
          onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input type='text' className='border-2 border-gray-500 rounded-md w-full p-2' 
          value={publishYear} 
          onChange={(e)=>setPublishYear(e.target.value)} />
        </div>
        <button className='p-2 bg-sky-300 m-8' 
        onClick={handleSaveBook}>
          Save Book
        </button>
      </div>
    </div>
  )
}

export default CreateBook;
