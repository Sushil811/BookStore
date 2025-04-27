import express, { request } from 'express';
import {PORT, MONGODB_URI} from './config.js';
import mongoose from 'mongoose';
import Book from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();
app.use(express.json());

//app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //credentials: true,
    allowedHeaders: ['Content-Type'],
}))



//app.get('/', (req, res) => {
//    res.send('Hello World!');
//});
app.use('/books', booksRoute);

/** 
//Save new book
app.post('/books', async(request, response)=>{
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
app.get('/books', async(request, response)=>{
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
app.get('/books/:id', async(request, response)=>{
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
app.put('/books/:id', async(request, response)=>{
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
app.delete('/books/:id', async(request, response)=>{
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

*/
mongoose
.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
