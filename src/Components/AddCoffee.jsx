import React from 'react';

const AddCoffee = () => {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const quantity = form.quantity.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value

    const newCoffee = { name, quantity, supplier, taste, category, details, photo }
    console.log(newCoffee)

    fetch('http://localhost:5000/coffee', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(req => req.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('coffee added successfully')
        }
      })
  }

  return (
    <div className='bg-[#F4F3F0] p-24'>

      <h2 className='text-3xl font-extrabold'>Add a coffee</h2>
      <form onSubmit={handleSubmit}>
        {/* Name and quantity row */}
        <div className='md:flex '>
          <div className="form-control md:w-1/2">
            <input type="text" placeholder="Coffee name" name='name' className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered w-full" />
          </div>
        </div>
        {/* Supplier and taste row */}
        <div className='md:flex mt-9'>
          <div className="form-control md:w-1/2">
            <input type="text" placeholder="Supplier" name='supplier' className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full" />
          </div>
        </div>
        {/* Category and details row */}
        <div className='md:flex mt-9'>
          <div className="form-control md:w-1/2">
            <input type="text" placeholder="Category" name='category' className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <input type="text" placeholder="Details" name='details' className="input input-bordered w-full" />
          </div>
        </div>

        <div className='md:flex mt-9'>
          <div className="form-control w-full">
            <input type="text" placeholder="PhotoUrl" name='photo' className="input input-bordered " />
          </div>

        </div>

        <input type="submit" value="Add Coffee" className='btn btn-block mt-9' />
      </form>
    </div>
  );
};

export default AddCoffee;