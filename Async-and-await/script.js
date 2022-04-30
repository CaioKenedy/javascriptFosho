fetch("https://pokeapi.co/api/v2/pokemon/1/")
  .then((response) => {
    return response.json();
  })
  .then((pokemon) => {
    console.log(pokemon.name);
  });

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: '{"tittle": "Javascript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
