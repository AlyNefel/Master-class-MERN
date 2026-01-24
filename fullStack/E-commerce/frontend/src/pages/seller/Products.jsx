import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getSellerProducts, deleteProduct } from '../../api/product.api'
import SideBarSeller from '../../components/layout/SideBarSeller'
const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() => {
    getSellerProducts().then(res => setProducts(res.data))
  }, [])


  // delete product 
  const remove = async (id) => {
    // call the endppoint to remove the product from the DB
    await deleteProduct(id)
    // update the view in front for the user 
    setProducts(products.filter(p => p._id !== id))
  }
  return (
    <div className='d-flex'>
      <SideBarSeller></SideBarSeller>
      <div className='p-4 w-100'>
        <h3>Products</h3>
        <button className='btn btn-success mb-3' onClick={() => navigate('/seller/products/new')}>
          Add New Product
        </button>
        <table className='table'>
          {products.map(p => (
            <tr>
              <td>{p.productName}</td>
              <td>
                <button className='btn btn-danger' onClick={() => remove(p._id)}>
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

export default Products