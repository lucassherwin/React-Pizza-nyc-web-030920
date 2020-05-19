import React from "react"

const PizzaForm = (props) => {
  // console.log(props)
  const {
    handleChange,
    editPizza,
    id, topping, size, vegetarian
  } = props;

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" 
            name='topping'
            value={topping}
            onChange={handleChange}
              />
        </div>
        <div className="col">
          <select value={size} className="form-control" 
          onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian === 'Vegetarian'}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" 
            checked={vegetarian === 'Not Vegetarian'}
            onChange={handleChange}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" 
          onClick={editPizza}>Submit</button>
          {/* pizza here that is being passed in is just the value of what is in the form  */}
        </div>
      </div>

  )
}

export default PizzaForm
