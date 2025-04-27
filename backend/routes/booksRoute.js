import express from 'express';
import Book from '../models/bookModel.js';


const router = express.Router();

//Save new book
router.post('/', async(request, response)=>{
    try{
        if(!request.body.title || !request.body.author || !request.body.publishYear)
        {
            return response.status(400).send({message:'Please provide all required fields: title, author, publishYear'});
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };
        const book = await Book.create(newBook);
        response.status(201).send(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:'Server Error'});
    }
})

//Get all books from the database
router.get('/', async(request, response)=>{
    try{
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data:books,
            message: 'Books fetched successfully'
        })

    }catch(error){
        console.log(error.message);
        response.status(500).send({message:'Server Error'});
    }
})

//Get a book by id from the database
router.get('/:id', async(request, response)=>{
    try{
        const { id } = request.params;
        const books = await Book.findById(id);
        return response.status(200).json({
            data:books,
            message: 'Book fetched successfully'
        })
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:'Server Error'});
    }
})

//Update a book by id from the database
router.put('/:id', async(request, response)=>{
    try{
        if(!request.body.title || !request.body.author || !request.body.publishYear)
        {
            return response.status(400).send({message:'Please provide all required fields: title, author, publishYear'});
        }
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if(!result){
            return response.status(404).send({message:'Book not found'});
        }
        return response.status(200).json({
            data:result,
            message: 'Book updated successfully'
        })

    }catch(error){
        console.log(error.message);
        response.status(500).send({message:'Server Error'})
    }
})

//Delete a book by id from the database
router.delete('/:id', async(request, response)=>{
    try{
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send({message:'Book not found'});
        }
        return response.status(200).json({
            data:result,
            message: 'Book deleted successfully'
        })

    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
})


export default router;
