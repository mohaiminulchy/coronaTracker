import React, { Component } from "react";

// import Cards from "./Components/Cards/Cards";
// import Chart from "./Components/Chart/Chart";
// import CountryPicker from "./Components/CountryPicker/CountryPicker";
// etar equivalent nicher line jar jnne component e ekta index.js file banano hoise
import { Cards, Chart, CountryPicker } from "./Components";
import { fetchData } from "./api/index";
import Logo from "../src/Components/Logo";

import styles from "./App.module.css";
import Footer from "./Components/Footer";
import Tips from "./Components/Tips";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Logo></Logo>
        <Cards data={data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Chart data={data} country={country}></Chart>
        <Tips className='tips'></Tips>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
