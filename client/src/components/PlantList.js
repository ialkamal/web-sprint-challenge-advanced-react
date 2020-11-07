import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super();
    this.state = {
      plants: [],
      search: "",
      results: [],
    };
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((res) => {
        this.setState({
          plants: res.data.plantsData,
          results: res.data.plantsData,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search)
      this.setState({
        ...this.state,
        results: this.state.plants.filter(
          (plant) =>
            plant.name.toLowerCase().includes(this.state.search) ||
            plant.scientificName.toLowerCase().includes(this.state.search) ||
            plant.description.toLowerCase().includes(this.state.search)
        ),
      });
  }

  handleSearch = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
    });
  };

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleSearch}
        />
        {this.state?.results?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
