window.onload = function () {
    const quote = document.getElementById("quote");
}

const api_url = "https://api.quotable.io/random";

// for quote
async function get_quote(url) {

    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
}

get_quote(api_url);


// for joke
window.onload = function () {
    const joke = document.getElementById("joke");
}
const api_url1 = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=religious,political,racist,sexist&type=single";

async function getjoke(url1) {

    const response = await fetch(url1);
    var data = await response.json();
    console.log(data);
    joke.innerHTML = data.joke;
}

getjoke(api_url1);

