// fetch Anime Api list random
async function start() {
  const response = await fetch("https://animechan.vercel.app/api/random");
  const data = await response.json();
  console.log(data);
  console.log(data.anime);
  console.log(data.character);
  console.log(data.quote);

  createQoute();
}

start();
