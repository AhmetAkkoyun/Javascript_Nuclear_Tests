async function f1() {

    var myStory = prompt("3-4 cümleden oluşan kısa bir hikaye yazın.");
    console.log("Hikaye: " + myStory);
    writeToSonuc("Hikaye: " + myStory);

    console.log("1- Hikayenin uzunluğu: " + myStory.length);
    writeToSonuc("1- Hikayenin uzunluğu: " + myStory.length);

    console.log("2- ilk 15 karakter" + myStory.substring(0, 15));
    writeToSonuc("2- ilk 15 karakter" + myStory.substring(0, 15));

    var myStoryWithoutSpaces = myStory.replace(/\s/g, '');
    console.log("3- Toplam Index Sayısı " + myStoryWithoutSpaces.length);
    writeToSonuc("3- Toplam Index Sayısı " + myStoryWithoutSpaces.length);

    console.log("4- İlk 15 Karakter " + myStory.substring(0, 15));
    writeToSonuc("4- İlk 15 Karakter " + myStory.substring(0, 15));

    console.log("5- 15. Karakterden Sonra " + myStory.slice(15));
    writeToSonuc("5- 15. Karakterden Sonra " + myStory.slice(15));

    console.log("6- Son 5 Karakter : " + myStory.slice(-5));
    writeToSonuc("6- Son 5 Karakter : " + myStory.slice(-5));

    console.log("7- 11. Karakterden Sonra Gelen 10 Karakter: " + myStory.substring(11, 10));
    writeToSonuc("7- 11. Karakterden Sonra Gelen 10 Karakter: " + myStory.substring(11, 10));

    console.log("8- Son 5 Karakter Haric Hikaye: " + myStory.slice(0, -5));
    writeToSonuc("8- Son 5 Karakter Haric Hikaye: " + myStory.slice(0, -5));

    var kelime = "ahmet";
    console.log("9- İçeriyor mu? " + myStory.includes(kelime));
    writeToSonuc("9- İçeriyor mu? " + myStory.includes(kelime));

    myStory = myStory.replace(/i/g, "ı");
    console.log("10- 'i' ler 'ı' oldu: " + myStory);
    writeToSonuc("10- 'i' ler 'ı' oldu: " + myStory);

    myStory = myStory.replace(/a/g, "e");
    console.log("11- 'a' ları 'e' ile değiştir: " + myStory);
    writeToSonuc("11- 'a' ları 'e' ile değiştir: " + myStory);

    console.log("12- Büyük Harfle Yaz: " + myStory.toUpperCase());
    writeToSonuc("12- Büyük Harfle Yaz: " + myStory.toUpperCase());

    console.log("13- Küçük Harfle Yaz: " + myStory.toLowerCase());
    writeToSonuc("13- Küçük Harfle Yaz: " + myStory.toLowerCase());

}    

f1();


async function f2() {

    var kullaniciAdi = prompt("Lütfen adınızı girin:");

    console.log("14a- Hoşgeldin, " + kullaniciAdi);
    writeToSonuc("14a- Hoşgeldin, " + kullaniciAdi);
    console.log(`14b- Hoşgeldin, ${kullaniciAdi}`);
    writeToSonuc(`14b- Hoşgeldin, ${kullaniciAdi}`);

    kullaniciAdi = " " + kullaniciAdi + " ";
    console.log("15- Hoşgeldin, |" + kullaniciAdi + "|");
    writeToSonuc("15- Hoşgeldin, |" + kullaniciAdi + "|");

    console.log("15a- Hoşgeldin, |" + kullaniciAdi.trimStart() + "|");
    writeToSonuc("15a- Hoşgeldin, |" + kullaniciAdi.trimStart() + "|");

    console.log("15b- Hoşgeldin, |" + kullaniciAdi.trimEnd() + "|");
    writeToSonuc("15b- Hoşgeldin, |" + kullaniciAdi.trimEnd() + "|");

    var kullaniciAdi2 = kullaniciAdi.trimStart().trimEnd();
    console.log("15c- Boşluksuz Kullanıcı Adı: " + kullaniciAdi2);
    writeToSonuc("15c- Boşluksuz Kullanıcı Adı: " + kullaniciAdi2);

    kullaniciAdi = "BENİM ADIM: " + kullaniciAdi.toUpperCase();
    console.log(" " + kullaniciAdi);
    writeToSonuc(" " + kullaniciAdi);


}    

f2();

var mesaj = "bu bir popup mesajıdır";
alert(mesaj);





