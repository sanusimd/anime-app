// Decleared Variable
const btn = document.getElementById("btn_anime");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  // fetch Anime Api list random
  async function start() {
    const response = await fetch("https://animechan.vercel.app/api/random");
    const data = await response.json();
    console.log(data);
    // console.log(data.anime);
    // console.log(data.character);
    // console.log(data.quote);

    createQuote(data.quote, data.anime, data.character);
  }

  start();

  console.log("hello");
  function createQuote(quote, anime, chracter) {
    document.querySelector(".qoute-box").innerHTML = `
    <p class="qoute">${quote}</p>
    <p class="anime">Anime ${anime}</p>
    <p class="chracter">${chracter}</p>
   
   `;
  }
});
