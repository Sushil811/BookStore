import React from 'react'
import BackBotton from '../components/BackBotton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(()=>{
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        setLoading(false);
        alert("An error occurred while deleting the book. Please try again.");
        console.log(error.message);
      });
  }
  return (
    <div className='p-4'>
      <BackBotton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ' '}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h1 className='text-2xl my-4'>Are you sure you want to delete this book?</h1>
        <button className='p-2 bg-red-500 text-white rounded-md' onClick={handleDeleteBook}>
          Delete Book
        </button>
        <button className='p-2 bg-gray-500 text-white rounded-md mt-4' onClick={() => navigate(-1)}>
          Cancel  
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;