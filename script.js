let heroes = ["Vikram", "Dilli (Khaidhi)", "Leo Das"];
let output = "";

for (let i = 0; i < heroes.length; i++) {
  output += `🔥 ${heroes[i]}<br>`;
}

document.getElementById("output").innerHTML = output;
