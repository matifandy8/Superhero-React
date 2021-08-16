import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Search.css";
import axios from "axios";
import Hero from "../../components/hero/Hero";


function Search() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [heros, setHeros] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.superheroapi.com/api.php/1443253749347702/search/${searchTerm}`
      )
      .then((res) => {
        setHeros(res.data.results);
        console.log(res)
      });
  };

  return (
    <div className="search">
      <div className="container-sm">
        <form className="form__search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write your Hero"
            value={searchTerm}
            onChange={handleChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
        {heros !== undefined ? 
          heros.map((hero) => (
            <div className="col-sm-6 p-2" key={hero.id}>
              <Hero id={hero.id} name={hero.name} image={hero.image.url} />
            </div>
          ))
          : 
          <p className="nofound">No se encontro resultado</p>
        }
        </div>
      </div>
    </div>
  );
}

export default Search;
