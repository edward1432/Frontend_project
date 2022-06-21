import React, { useState } from "react";
import MuseumDataService from "../services/MuseumService";

const AddMuseum = () => {
  const initialMuseumState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [Museum, setMuseum] = useState(initialMuseumState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMuseum({ ...Museum, [name]: value });
  };

  const saveMuseum = () => {
    var data = {
      title: Museum.title,
      description: Museum.description
    };

    MuseumDataService.create(data)
      .then(response => {
        setMuseum({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newMuseum = () => {
    setMuseum(initialMuseumState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newMuseum}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={Museum.name}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={Museum.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveMuseum} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMuseum;