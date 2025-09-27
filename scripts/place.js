document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

function calculateWindChill(tempC, speedKmh) {
  if (tempC <= 10 && speedKmh > 4.8) {
    return Math.round(
      13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
  } else {
    return "N/A";
  }
}

const temp = parseFloat(document.getElementById('temp').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);

document.getElementById('chill').textContent = calculateWindChill(temp, speed);
