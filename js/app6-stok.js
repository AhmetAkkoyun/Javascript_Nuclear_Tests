var marka = prompt("Hangi marka lazım?").toLowerCase();
var renk = prompt("Ne renk olsun?").toLowerCase();
var stokDurumu = 0;

switch (marka) {
  case "bmw":
    switch (renk) {
      case "siyah":
        stokDurumu = 12;
        break;
      case "beyaz":
        stokDurumu = 3;
        break;
      case "mavi":
        stokDurumu = 0;
        break;
      default:
        stokDurumu = "Bilinmiyor";
    }
    break;

  case "mercedes":
    switch (renk) {
      case "siyah":
        stokDurumu = 0;
        break;
      case "beyaz":
        stokDurumu = 20;
        break;
      case "mavi":
        stokDurumu = 2;
        break;
      default:
        stokDurumu = "Bilinmiyor";
    }
    break;

  case "audi":
    switch (renk) {
      case "siyah":
        stokDurumu = 5;
        break;
      case "beyaz":
        stokDurumu = 0;
        break;
      case "mavi":
        stokDurumu = 16;
        break;
      default:
        stokDurumu = "Bilinmiyor";
    }
    break;

  default:
    stokDurumu = "Bilinmiyor";
}

var durum ="";
if (stokDurumu <= 0){
    durum = "yok";
} 
else {
    durum = stokDurumu.toString() + " adet var.";
}  

console.log(marka + " " + renk + " renkte stok durumu: " + durum);
writeToSonuc(marka + " " + renk + " renkte stok durumu: " + durum);