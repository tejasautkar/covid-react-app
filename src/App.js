import React, { Component } from "react";

import { CountryPicker, Cards, Chart } from "./components";
import styles from "./App.module.css";
import fetchData from "./api";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);

    this.setState({
      data: fetchData.data,
    });
  }

  render() {
    const { data } = this.setState;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
