import { useState } from "react";

const Home = () => {
  const [id, setId] = useState("");

  const inputHandle = (event) => {
    const isNumber = !isNaN(event.target.value);
    if (isNumber) {
      setId(event.target.value);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <form action={`/users/${id}`}>
        <label htmlFor="id">Enter user ID: </label>
        <input type="text" id="id" onChange={inputHandle} value={id} />
        <button
          onClick={() => {
            setId(id);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
