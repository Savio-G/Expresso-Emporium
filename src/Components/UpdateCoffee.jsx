import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
  const coffeeData = useLoaderData()
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffeeData

  const handleUpdate = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const quantity = form.quantity.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value

    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
    console.log(updatedCoffee)

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(req => req.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          alert('coffee updated successfully')
        }
      })
  }
  return (
    <div className='bg-[#F4F3F0] p-24'>

      <h2 className='text-3xl font-extrabold'>Add a coffee</h2>
      <form onSubmit={handleUpdate}>
        {/* Name and quantity row */}
        <div className='md:flex '>
          <div className="form-control md:w-1/2">
            <input type="text" placeholder="Coffee name" defaultValue={name} name='name' className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <input type="text" placeholder="Quantity" defaultValue={quantity} name='quantity' className="input input-bordered w-full" />
          </div>
        </div>
        {/* Supplier and taste row */}
        <div className='md:flex mt-9'>
          <div className="form-control md:w-1/2">
            <input type="text" placeholder="Supplier" defaultValue={supplier} name='supplier' className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <input type="text" placeholder="Taste" defaultValue={taste} name='taste' className="input input-bordered w-full" />
          </div>
        </div>
        {/* Category and details row */}
        <div className='md:flex mt-9'>
          <div className="form-control md:w-1/2">
            <input type="text" placeholder="Category" defaultValue={category} name='category' className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <input type="text" placeholder="Details" defaultValue={details} name='details' className="input input-bordered w-full" />
          </div>
        </div>

        <div className='md:flex mt-9'>
          <div className="form-control w-full">
            <input type="text" placeholder="PhotoUrl" defaultValue={photo} name='photo' className="input input-bordered " />
          </div>

        </div>

        <input type="submit" value="Update Coffee" className='btn btn-block mt-9' />
      </form>
    </div>
  );
};

export default UpdateCoffee;