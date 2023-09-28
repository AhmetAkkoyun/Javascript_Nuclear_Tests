// -------------------For, Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.


var ogrenciSayisi = parseInt(prompt("öğrenci sayısı girin"));
var toplamNot = 0;
var gecenOgrenciSayisi = 0;
var sinifOrtalamasi = 0;

for (var i = 1; i <= ogrenciSayisi; i++) {
    var not = parseInt(prompt(i + ". öğrencinin notunu girin:"));
    console.log(i +". öğrencinin notu: " + not);
    writeToSonuc(i +". öğrencinin notu: " + not);

    if (not >= 60) {
        console.log("öğrenci geçer not aldı.");
        writeToSonuc("öğrenci geçer not aldı.");
        gecenOgrenciSayisi++;
    }
    else {
        console.log("öğrenci başarısız.");
        writeToSonuc("öğrenci başarısız");
    }

    toplamNot += not;
    sinifOrtalamasi = toplamNot / i;
    console.log("sınıf ortalaması: " + sinifOrtalamasi);
    writeToSonuc("sınıf ortalaması: " + sinifOrtalamasi);
}

console.log("-----SONUÇLAR-----");
writeToSonuc("-----SONUÇLAR-----");

console.log("Sınıf Ortalaması: " + sinifOrtalamasi.toFixed(2));
writeToSonuc("Sınıf Ortalaması: " + sinifOrtalamasi.toFixed(2));

console.log("Geçen Öğrenci Sayısı: " + gecenOgrenciSayisi);
writeToSonuc("Geçen Öğrenci Sayısı: " + gecenOgrenciSayisi);
