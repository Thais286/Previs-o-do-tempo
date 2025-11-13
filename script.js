const dadosClima = {
  'São Paulo': { temp: 22, cond: 'Ensolarado' },
  'Rio de Janeiro': { temp: 25, cond: 'Parcialmente nublado' },
  'Vitoria': { temp: 24, cond: 'nublado e com grande umidade' },
  'Belo Horizonte': { temp: 20, cond: 'Grande umidade' },
  'Rio Branco': { temp: 19, cond: 'Parcialmente nublado' },
  'Maceió': { temp: 31, cond: 'Ensolarado' },
  'Macapá': { temp: 31, cond: 'Ensolarado' },
  'Manaus': { temp: 31, cond: 'Ensolarado' },
  'Salvador': { temp: 30, cond: 'Ensolarado' },
  'Fortaleza': { temp: 29, cond: 'Ensolarado' },
  'Goiânia': { temp: 21, cond: 'Parcialmente nublado' },
  'São Luís': { temp: 23, cond: 'nublado e tempo seco' },
  'Cuiabá': { temp: 29, cond: 'Ensolarado' },
  'Campo Grande': { temp: 29, cond: 'Quente e umido' },
  'Belém': { temp: 26, cond: 'Quente e umido' },
  'João Pessoa': { temp: 26, cond: 'Quente e umido' },
  'Curitiba': { temp: 21, cond: 'Parcialmente nublado' },
  'Recife': { temp: 27, cond: 'Quente e umido' },
  'Teresina': { temp: 27, cond: 'Quente e umido' },
  'Natal': { temp: 24,  cond: 'nublado e tempo seco' },
  'Porto Alegre': { temp: 24, cond: 'nublado e tempo seco' },
  'Porto Velho': { temp: 31, cond: 'Ensolarado' },
  'Boa Vista': { temp: 26, cond: 'Quente e umido' },
  'Florianópolis': { temp: 22, cond: 'Parcialmente nublado' },
  'Aracaju': { temp: 23,  cond: 'nublado e tempo seco' },
  'Palmas': { temp: 23, cond: 'nublado e tempo seco' },
  'Brasília': { temp: 21, cond: 'Parcialmente nublado' },
};

function mostrarClima() {
  const capital = document.getElementById("capital").value.trim();
  const resultado = document.getElementById("resultado");

  if (!capital) {
    resultado.innerHTML = "Por favor, digite uma capital.";
    return;
  }

  if (dadosClima[capital]) {
    resultado.innerHTML = `Temperatura: ${dadosClima[capital].temp}°C <br> Condição: ${dadosClima[capital].cond}`;
  } else {
    resultado.innerHTML = 'capital não encontrada na base de dados.';
  }
}

document.getElementById("buscarBtn").addEventListener("click", mostrarClima);
