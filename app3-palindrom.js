var text = prompt("bir palindrom gir")
var tersText = text.split('').reverse().join('');

if (text === tersText) {
    console.log(text + " kelimesi bir palindromdur.");
    writeToSonuc(text + " kelimesi bir palindromdur.");
} else {
    console.log(text + " kelimesi bir palindrom değildir.");
    writeToSonuc(text + " kelimesi bir palindrom değildir.");
}
