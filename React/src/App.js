import React, { Component } from "react";
import ValidCarDataList from './data/ValidCarDataList'

class App extends Component {
  state = { make: "", year: "", isValid: undefined };

  isValidCar = (car) => {
    if (!isNaN(car.year) && (car.year.length === 2 || car.year.length === 4)) {
      return this.validCar(car);
    }

    return false;
  };

  validCar = (car) => {
    let result = false;

    let validDate =
      car.year.length === 4
        ? Number(String(car.year).substring(2, 4))
        : car.year;

    for (let item of ValidCarDataList) {
      if (
        car.make.toLowerCase() === item.make &&
        (validDate > item.minYearOfConstruction ||
          validDate < item.maxYearOfConstruction)
      ) {
        result = true;

        break;
      }
    }

    return result;
  };

  render() {
    return (
      <div className="App">
        {this.state.isValid ? <h2>Valid Vehicle</h2> : <h2>Invalid Vehicle</h2>}
        <label>Make:</label>
        <input
          type="text"
          name="make"
          onChange={(event) =>
            this.setState({ ...this.state, make: event.target.value })
        }
        />
        <br />
        <label>Year:</label>
        <input
          type="text"
          name="year"
          onChange={(event) =>
            this.setState({ ...this.state, year: event.target.value })
          }
        />
        <br />
        <button
          onClick={() =>
            this.setState({
              ...this.state,
              isValid: this.isValidCar({
                make: this.state.make,
                year: this.state.year,
              }),
            })
          }
        >
          Validate
        </button>
      </div>
    );
  }
}

export default App;
