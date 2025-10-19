import {languages} from '../configs/languages.js'

// get all languages 
const getAllLanguages =(req,res)=>{
    res.json(languages)
}


// get language by id
const getLanguageById=(req,res)=>{
    // extract the id from the req 
    const {id}=req.params
    const oneLanguage =languages.find(lan=>lan.id ==id)
    //if found
    if(oneLanguage){
        res.status(200).json(oneLanguage)
    } else {
        res.status(404).send("stop using the url !!")
    }
}

// post (create) language
const createLanguage=(req,res)=>{
    // i will add a new language to the array
    const newLanguage=req.body 
    languages.push(newLanguage)

    res.status(200).json(languages)
}

export {getAllLanguages,getLanguageById,
createLanguage
}