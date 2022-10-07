import React, { useState, useEffect } from "react";
import "./App.css";
import isEmpty from "lodash/isEmpty";

const App = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // see how we want to handle errors

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8079/api/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Fetch went wrong");
        }
      })
      .then(({ projects }) => {
        setAllProjects(projects);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  console.log(allProjects);

  if (!isEmpty(error)) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      {!loading && !error && allProjects.length > 0 && (
        <ul>
          {allProjects.map(({ name, _id, description, techStackTags }) => (
            <li key={_id}>
              {name}, {description}, {techStackTags}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
