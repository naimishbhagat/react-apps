import React from "react";
import _ from "lodash";
import { useGlobalContext } from "../context";
const TopCountries = () => {
  const {
    countries,
    searchTerm,
    sortBy,
    setSearchTerm,
    setSortBy,
  } = useGlobalContext();

  let result = !searchTerm
    ? countries
    : countries.filter((customer) =>
        customer.country.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  if (sortBy !== "") {
    switch (sortBy) {
      case "asc":
        result = _.orderBy(result, ["country"], ["asc"]);
        console.log(result);
        break;
      case "desc":
        result = _.orderBy(result, ["country"], ["desc"]);
        break;
      case "covid":
        result = _.orderBy(result, ["cases"], ["desc"]);
        break;
      case "daily":
        result = _.orderBy(result, ["todayCases"], ["desc"]);
        break;
      default:
        result = result;
    }
  }
  return (
    <section>
      <input
        type="text"
        placeholder="search country ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select className="sort" onChange={(e) => setSortBy(e.target.value)}>
        <option value=""></option>
        <option value="asc">By ASC</option>
        <option value="desc">By Desc</option>
        <option value="covid">By Most cases</option>
        <option value="daily">By Daily cases</option>
      </select>
      <table className="table">
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Total Cases</th>
            <th>Active Cases</th>
            <th>Recovered</th>
            <th>Total Tests</th>
            <th>Cases Today</th>
            <th>Deaths Today</th>
          </tr>
        </thead>
        <tbody>
          {result.map((country, index) => {
            return (
              <tr key={index}>
                <td>{country.country}</td>
                <td>{country.cases}</td>
                <td>{country.recovered}</td>
                <td>{country.active}</td>
                <td>{country.tests}</td>
                <td>{country.todayCases}</td>
                <td>{country.todayDeaths}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TopCountries;
