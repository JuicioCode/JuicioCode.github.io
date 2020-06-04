console.log("Start!")
const wireSection = [1, 1.5, 2.5, 4, 6, 10, 16, 25]
const diametroMaxFili = [0.21, 0.26, 0.26, 0.31, 0.31, 0.41, 0.41, 0.41]
const diamoetroConduttore = [1.23, 1.46, 1.92, 2.44, 2.96, 3.99, 5.20, 6.50]
const spessoreIsolamento = [0.80, 0.80, 0.90, 1.00, 1.00, 1.20, 1.20, 1.40]
const spessoreGuaina = [1.30, 1.50, 1.70, 1.80, 2.00, 3.10, 3.30, 3.60]
const resistenzaElettrica = [19.5, 13.3, 7.98, 4.95, 3.30, 1.91, 1.21, 0.78]
const pesoApprox = [115, 140, 200, 275, 365, 685, 835, 1220]
const fattoreCU = [19.20, 28.80, 48.00, 76.80, 115.20, 192, 307.20, 480]
const maxCableLength = []
const totalCableLenght = []
const bottone = document.getElementById("calcolare").onclick= function() {calcola()}

function calcola(){
  let lumiVolt = document.getElementById("LV").value
  let lumiPow = document.getElementById("LP").value
  let maxDropVoltage = document.getElementById("MDP")
  console.log("calcolando...")
  const maxDropV = lumiVolt*4/100

  for(let i=0; i<resistenzaElettrica.length; i++){
    maxCableLength[i] = Math.round(Math.floor((((maxDropV * (lumiVolt-2*maxDropV))/(lumiPow*resistenzaElettrica[i]))*1000))*0.9)
    totalCableLenght[i] = Math.ceil((maxCableLength[i]/1000)*pesoApprox[i])
  }
  maxDropVoltage.value = maxDropV
  updateTabella()
}

function updateTabella(){
  let td;
  let z=0;
  for(let i=0; i<maxCableLength.length; i++){
    z++
    td = document.getElementsByTagName("td")
    td[z].innerHTML = maxCableLength[i]
    z++
    td[z].innerHTML = totalCableLenght[i]
    z++
  }
}
