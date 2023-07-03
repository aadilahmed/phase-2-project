import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Grid, Segment } from "semantic-ui-react";
import gamepad from "../Video-Game-Controller-Icon.svg.png";

function GameForm({ onCreateGame }) {
  const [formData, setFormData] = useState({
    name: "",
    background_image: "",
    rating: null,
  });

  const history = useHistory();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // Handle GameForm submit and redirect to home page
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

    history.push("/");
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh", margin: "0", "margin-left":"200px" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 650 }} >
        <Segment stacked>
          <img
            className="ui centered image"
            src={gamepad}
            alt="game controller on red background"
            style={{ height: "100px", width: "100px" }}
          />
          <h3>Add a Game!</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal" grouped>
              <Form.Input
                fluid
                label="Name"
                placeholder="Enter Game Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                label="Background Image URL"
                placeholder="Enter Background Image URL"
                name="background_image"
                value={formData.background_image}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                label="Rating"
                placeholder="Enter Rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Button style={{ background: "#dc3545", color: "aliceblue" }}>
              Submit
            </Form.Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default GameForm;
