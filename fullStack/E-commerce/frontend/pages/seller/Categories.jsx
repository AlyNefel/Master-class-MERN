import React from 'react'
import{useEffect,useState} from "react"
import{createCategory,deleteCategory,getShopCategories} from "../../api/category.api.js"
import SideBarSeller from '../../components/layout/SideBarSeller.jsx'
const Categories = () => {
    const[categories,setCategories]=useState([])
 // use getMyShop endpoint to get the shop id using the connected user id (useEffect)
    const [name,setName]=useState("")
    //create category 
    const submitCat=async ()=>{
        await createCategory({categoryName:name,shop:categories[0].shop})
    }
    // delete category 
    const remove=async(id)=>{
        // call the endppoint to remove the category from the DB
        await deleteCategory(id)
      // update the view in front for the user 
      setCategories(categories.filter(c=>c._id!==id))
    }
    useEffect(()=>{
    getShopCategories().then(res=>setCategories(res.data))
    },[])
  return (
    <div className='d-flex'>
     <SideBarSeller></SideBarSeller>
     {/* create category */}
     
    <div className="p-4">
        <h3>Create Category</h3>
        <input value={name} onChange={e=>setName(e.target.value)} className="form-control mb-2" />
        <button className="btn btn-primary" onClick={submitCat}>Add Category</button>
    </div>

     <div className='p-4 w-100'>
        <h3>Categories</h3>
        <table className='table'>
         {categories.map(c=>(
          <tr>
            <td>{c.categoryName}</td>
            <td>
                <button className='btn btn-danger' onClick={()=>remove(c._id)}>
                    Delete
                </button>
            </td>
          </tr>  
         ))
         }
        </table>

     </div>
    </div>
  )
}

export default Categories