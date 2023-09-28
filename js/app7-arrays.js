// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
var myArray = ["Ad", "Soyad", 30, true, "Muz", "Çilek", "elma", "Pizza", "Pasta", "makarna", "köfte"];
console.log(myArray);

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
var ilkisim = myArray[0];
myArray[0] = "Ahmet";
console.log("1- "+ilkisim+" => "+ myArray[0])
writeToSonuc("1- "+ilkisim+" => "+ myArray[0])

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 3- dizinin uzunluğunu konsola yazdırın.
console.log("2- "+"dizi uzunluğu: "+ myArray.length);
writeToSonuc("2- "+"dizi uzunluğu: "+ myArray.length);

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
myArray.push("kedi");
console.log("4- "+myArray);
writeToSonuc("4- "+myArray);

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
myArray.unshift("köpek");
var myArrayNewLength = myArray.length;   //**************************************** */

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
var silinenSondakiEleman = myArray.pop();
console.log("6- silinen sondaki eleman: "+silinenSondakiEleman);
writeToSonuc("6- silinen sondaki eleman: "+silinenSondakiEleman);

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
var silinenBastakiEleman = myArray.shift();
console.log("7- silinen baştaki eleman: "+silinenBastakiEleman);
writeToSonuc("7- silinen baştaki eleman: "+silinenBastakiEleman);

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
var newArray = [silinenBastakiEleman, silinenBastakiEleman.length, silinenSondakiEleman, silinenSondakiEleman.length];
console.log("8- silinen elemanların özellikleri: "+newArray);
writeToSonuc("8- silinen elemanların özellikleri: "+newArray);

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
var birlestirilmisDizi1 = myArray.concat(newArray);
console.log("ilk yöntemle birleştirilmiş dizi: ["+birlestirilmisDizi1+"]");
writeToSonuc("ilk yöntemle birleştirilmiş dizi: ["+birlestirilmisDizi1+"]");

var birlestirilmisDizi2 = [myArray, newArray];
console.log("ikinci yöntemle birleştirilmiş dizi: ["+birlestirilmisDizi2+"]");
writeToSonuc("ikinci yöntemle birleştirilmiş dizi: ["+birlestirilmisDizi2+"]");

console.log("---------------------------");
writeToSonuc("--------------------------");



// 10- myArray içerisinde eleman olarak "Veli" var mı ?
console.log("myArray içerisinde veli var mı? "+ myArray.includes("Veli"));
writeToSonuc("myArray içerisinde veli var mı? "+ myArray.includes("Veli"));

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 11- myArray içersinide 4.elemandan itibaren patates var mı?
var fromIndex = myArray.findIndex(function (element, index) {
    if (index >= 4 && Array.isArray(element) && element.includes("Patates")) {
      return true;
    }
  });
  console.log("4. elemandan itibaren Patates var mı? " + (fromIndex !== -1));

console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 15- son diziniz 4 elemanlı olmuş olmalı. tek metot ile 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin
console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");



// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.
console.log("dizi: ["+myArray+"]");
writeToSonuc("dizi: ["+myArray+"]");
console.log("---------------------------");
writeToSonuc("--------------------------");

