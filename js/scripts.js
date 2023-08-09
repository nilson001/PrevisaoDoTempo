const key = "36a0b9e5b2005a1e62f65149cdc779ab";

const btnbuscar = () => {
  const inputValue = document.querySelector(".input-cidade");
  BuscarCidade(inputValue.value);
  inputValue.value = "";
  inputValue.focus();
};

const BuscarCidade = async (cidade) => {
  dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  Novoinput(dados);
};

const Novoinput = (dados) => {
  if (dados.name) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  } else {
    document.querySelector(".cidade").innerHTML = "Cidade não encontrada";
    document.querySelector(".temp").innerHTML = "Sem Infor";
    document.querySelector(".previsao").innerHTML = "Sem infor";
    document.querySelector(".umidade").innerHTML = "Sem infor";
  }

  if (dados.main.temp) {
    document.querySelector(".temp").innerHTML =
      Math.floor(dados.main.temp) + "°C";
  } else {
    document.querySelector(".temp").innerHTML = "Sem Infor";
  }
  if (dados.weather[0].description) {
    document.querySelector(".previsao").innerHTML =
      dados.weather[0].description;
  } else {
    document.querySelector(".previsao").innerHTML = "Sem infor";
  }
  if (dados.main.humidity) {
    document.querySelector(".umidade").innerHTML =
      "Umidade: " + dados.main.humidity + "%";
  } else {
    document.querySelector(".umidade").innerHTML = "Sem infor";
  }

  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
};
