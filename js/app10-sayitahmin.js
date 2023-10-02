function sayiTahminOyunu() {
  const rastgeleSayi = Math.floor(Math.random() * 10) + 1;
  let denemeHakki = 3;
  
  while (denemeHakki > 0) {
    const tahmin = parseInt(prompt("1 ile 10 arasında bir sayı tahmin edin:" + `Deneme hakkı: ${denemeHakki}`));
  
    if (tahmin === rastgeleSayi) {
      alert("tebrikler doğru tahmin ettiniz.");
      console.log("Tebrikler! Doğru tahmin ettiniz.");    
      writeToSonuc("Tebrikler! Doğru tahmin ettiniz.");
      break; 
    } else {
      if (tahmin < rastgeleSayi) {
        alert("Daha büyük bir sayı tahmin edin.");
        console.log("Daha büyük bir sayı tahmin edin.");
        writeToSonuc("Daha büyük bir sayı tahmin edin.");
      } else {
        alert("Daha küçük bir sayı tahmin edin.");
        console.log("Daha küçük bir sayı tahmin edin.");
        writeToSonuc("Daha küçük bir sayı tahmin edin.");
      }
      denemeHakki--;
    }
  }
  
  if (denemeHakki === 0) {
    console.log(`Deneme hakkınız bitti. Doğru cevap ${rastgeleSayi} idi.`);
    writeToSonuc(`Deneme hakkınız bitti. Doğru cevap ${rastgeleSayi} idi.`);
  }
}
  
sayiTahminOyunu();

