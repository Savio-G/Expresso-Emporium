import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {

  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee
  const handleDelete = id => {
    console.log(id)
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          alert('deleted successfully')
        }
      })
  }

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Movie" /></figure>
        <div className="flex justify-between w-full mt-6">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{supplier}</p>
            <p>{taste}</p>
            <p>{category}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical">
              <button className="btn">View</button>
              <Link to={`UpdateCoffee/${_id}`}>
                <button className="btn">Edit</button>
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;