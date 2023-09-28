var sayi = -25;

console.log("sayı: " + sayi);
writeToSonuc("sayı: " + sayi);


var sayiMutlakDeger = Math.abs(sayi);

console.log("1- sayının mutlak degeri: " + sayiMutlakDeger);
writeToSonuc("1- sayının mutlak degeri: " + sayiMutlakDeger);


var ondalikliSayi = 12.25436;

console.log("ondalıklı sayı: "+ ondalikliSayi);
writeToSonuc("ondalıklı sayı: "+ ondalikliSayi);

console.log("2- ondalıklısayının yukarı yuvarlanması: "+ Math.ceil(ondalikliSayi));
writeToSonuc("2- ondalıklısayının yukarı yuvarlanması: "+ Math.ceil(ondalikliSayi));

console.log("3- ondalıklısayının aşağı yuvarlanması: "+ Math.floor(ondalikliSayi));
writeToSonuc("3- ondalıklısayının aşağı yuvarlanması: "+ Math.floor(ondalikliSayi));


var sayilar = [6,15,-7,0,80,-35];

console.log("sayılar: "+ sayilar);
writeToSonuc("sayılar: "+ sayilar);

console.log("4- En büyük sayi: "+ Math.max(sayilar));
writeToSonuc("4- En büyük sayi: "+ Math.max(sayilar));

console.log("5- En küçük sayi: "+ Math.min(sayilar));
writeToSonuc("5- En küçük sayi: "+ Math.min(sayilar));


console.log("ondalıklı sayı: "+ ondalikliSayi);
writeToSonuc("ondalıklı sayı: "+ ondalikliSayi);

console.log("6- ondalıklı sayı virgülden sonra 3 : "+ ondalikliSayi.toFixed(3));
writeToSonuc("6- ondalıklı sayı virgülden sonra 3 : "+ ondalikliSayi.toFixed(3));


console.log("sayı: " + sayiMutlakDeger);
writeToSonuc("sayı: " + sayiMutlakDeger);

console.log("7- sayının karekökü: " + Math.sqrt(sayiMutlakDeger));
writeToSonuc("7- sayının karekökü: " + Math.sqrt(sayiMutlakDeger));


console.log("sayı: " + sayi);
writeToSonuc("sayı: " + sayi);

var kuvvet = 3;

console.log("8- sayının "+kuvvet+ ". kuvveti" + Math.pow(sayi,kuvvet));
writeToSonuc("8- sayının "+kuvvet+ ". kuvveti" + Math.pow(sayi,kuvvet));


var yeniOndalikliSayi = 123.456789;

console.log("9- ondalikli sayinin toplamda 6 hane ile yazılışı: "+yeniOndalikliSayi.toPrecision(6));
writeToSonuc("9- ondalikli sayinin toplamda 6 hane ile yazılışı: "+yeniOndalikliSayi.toPrecision(6));


console.log("10- ondalıklı sayının sadece tamsayı kısmı: "+ Math.trunc(yeniOndalikliSayi));
writeToSonuc("10- ondalıklı sayının sadece tamsayı kısmı: "+ Math.trunc(yeniOndalikliSayi));
















