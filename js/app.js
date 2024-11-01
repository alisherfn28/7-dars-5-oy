const button = document.querySelector("#btn");
const block = document.querySelector("#block");
const userName = document.querySelector("#name");
const userSurname = document.querySelector("#surname");
const usereImage = document.querySelector("#img");

function createCard(data) {
  return `
    <div class="card">
      <img src="${data.img}" alt="" />
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    </div>
    `;
}

button &&
  button.addEventListener("click", function () {
    let data = {
      img: usereImage.value,
      title: userName.value,
      text: userSurname.value,
    };

    let card = createCard(data);
    block.innerHTML += card;
  });
