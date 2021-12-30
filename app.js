let input = $("input");
let search = $("#search");
let div = $("div");

$('#gif').on("submit", async function(e){
  e.preventDefault();
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: input.val(),
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  max = response.data.data.length;
  random = Math.floor(Math.random() * max);
  gif = response.data.data[random].images.original.url;
  div.append($(`<img src="${gif}">`));
  input.val("");
});

$("#remove").on("click", function(e){
  e.preventDefault();
  $('div').empty();
});
