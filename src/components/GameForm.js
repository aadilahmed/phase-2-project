import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function GameForm({ onCreateGame }) {
  const [formData, setFormData] = useState({
    name: "",
    background_image: "",
    rating:0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const gameData = {
      name: formData.name,
      background_image: formData.background_image,
      rating: formData.rating,
    };

    fetch("http://localhost:3333/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    })
      .then((response) => response.json())
      .then((data) => onCreateGame(data));
  }

  return (
    <div>
      <h3>Add a Game!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Background Image"
            placeholder="Background Image"
            name="background_image"
            value={formData.background_image}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Rating"
            placeholder="Rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default GameForm;
