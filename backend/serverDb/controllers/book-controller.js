import Book from '../models/book.model.js'

// CRUD operation for the book 

// get all books 
// net3adou nesta3mlou async & await + try and catch 
const getAllBooks=async(req,res)=>{
    try {
        const books= await Book.find()
        res.json(books)
        //ligne hdbfhbdk
    } catch (error) {
        res.status(500).json(error)
        //custom message error 
        // res.status(500).json({message:"This is a custom message error 500 "})
    }
}


// create book 
const createBook =async(req,res)=>{
    try {
        const newBook=req.body
        // {author,nOfPages,releaseyer,color}
        const bookToCreate=new Book(newBook)
        //const bookToCreate=new Book(req.body)
        // lahna bech yetzed l db b .save()
        await bookToCreate.save()
    res.status(201).json({message:"Book created successfully !!!"})
        
    } catch (error) {
   res.status(500).json(error)

    }
}

// find book by id 
const findBookById=async(req,res)=>{
    try {
        const book=await Book.findById(req.params.id)
        if(book){
            res.status(200).json({book:book,message:"book found !!"})
        } else {
            res.status(404).json({message:"Book not found and stop using the url directly !!!"})
        }
    } catch (error) {
    res.status(500).json(error)
 
    }
}

// delete book by id 
const deleteBook=async(req,res)=>{
    try {
        const bookToDelete= await Book.findByIdAndDelete(req.params.id)
        if(book){
            res.status(200).json({message:"book Deleted !!"})
        } else {
            res.status(404).json({message:"Book not found and stop using the url directly !!!"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllBooks,createBook,findBookById,deleteBook}