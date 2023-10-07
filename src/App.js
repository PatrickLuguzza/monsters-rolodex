import React from "react";

import "./App.css";
import CardList from "./components/Cardlist/CardList";
import SearchBox from "./components/search-box/search-box.compoonent";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonster);
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
