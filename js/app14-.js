// 1- myObject isimli boş bir nesne oluşturun.
const myObject = {};

// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
myObject.isim = "Ahmet";
myObject.yas = 32;
myObject.cinsiyet = "Erkek";
myObject.meslek = "Mühendis";

// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
delete myObject.cinsiyet;

// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.
const kopyaObject = Object.assign({}, myObject);

// 5- nesnenizin anahtarlarını konsola yazdırın.
console.log(Object.keys(myObject));

// 6- nesnenizin değerlerini konsola yazdırın.
console.log(Object.values(myObject));

// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.
console.log(Object.entries(myObject));

// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin
if ("isim" in myObject) {
  console.log("Nesnede 'isim' özelliği bulunuyor.");
} else {
  console.log("Nesnede 'isim' özelliği bulunmuyor.");
}

// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.
Object.freeze(myObject);

// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.
Object.seal(myObject);
