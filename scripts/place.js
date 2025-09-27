// Footer: current year & last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, speedKmh) {
  if (tempC <= 10 && speedKmh > 4.8) {
    // Wind chill formula in Celsius
    return Math.round(
      13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
  } else {
    return "N/A";
  }
}

// Get static temperature and speed from DOM
const temp = parseFloat(document.getElementById('temp').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);

// Calculate wind chill and display
document.getElementById('chill').textContent = calculateWindChill(temp, speed);
