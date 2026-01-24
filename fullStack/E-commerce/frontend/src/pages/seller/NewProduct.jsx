import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../api/product.api'
import { getShopCategories } from '../../api/category.api'
import SideBarSeller from '../../components/layout/SideBarSeller'

const NewProduct = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        images: []
    })

    useEffect(() => {
        // Fetch categories for the dropdown
        getShopCategories().then(res => setCategories(res.data))
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // Create the product
            await createProduct(formData)
            // Redirect to Products page after successful creation
            navigate('/seller/products')
        } catch (error) {
            console.error('Error creating product:', error)
            alert('Failed to create product. Please try again.')
        }
    }

    return (
        <div className='d-flex'>
            <SideBarSeller></SideBarSeller>
            <div className='p-4 w-100'>
                <h3>Create New Product</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Product Name</label>
                        <input
                            type='text'
                            name='productName'
                            className='form-control'
                            value={formData.productName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <textarea
                            name='description'
                            className='form-control'
                            value={formData.description}
                            onChange={handleChange}
                            rows='4'
                            required
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Price</label>
                        <input
                            type='number'
                            name='price'
                            className='form-control'
                            value={formData.price}
                            onChange={handleChange}
                            min='0'
                            step='0.01'
                            required
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Stock</label>
                        <input
                            type='number'
                            name='stock'
                            className='form-control'
                            value={formData.stock}
                            onChange={handleChange}
                            min='0'
                            required
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Category</label>
                        <select
                            name='category'
                            className='form-control'
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Select a category</option>
                            {categories.map(cat => (
                                <option key={cat._id} value={cat._id}>
                                    {cat.categoryName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='d-flex gap-2'>
                        <button type='submit' className='btn btn-primary'>
                            Create Product
                        </button>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={() => navigate('/seller/products')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewProduct
