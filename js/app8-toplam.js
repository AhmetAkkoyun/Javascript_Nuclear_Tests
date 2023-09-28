var ilk = parseInt(prompt("Başlangıç sayısı ver"));
var son = parseInt(prompt("Bitiş sayısı ver"));

console.log("ilk sayı: " + ilk);
writeToSonuc("ilk sayı: " + ilk);
console.log("son sayı " + son);
writeToSonuc("son sayı " + son);

var toplam = 0;

for (var i = ilk; i <= son; i++){
    toplam += i;
}

console.log(ilk + " sayısından " + son + " sayısına kadar olan sayıların toplamı: "+ toplam);
writeToSonuc(ilk + " sayısından " + son + " sayısına kadar olan sayıların toplamı: "+ toplam);

