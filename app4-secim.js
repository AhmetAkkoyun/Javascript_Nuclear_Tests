var yas = prompt("Yaşınızı girin:");
yas = parseInt(yas);

var uyruk = prompt("Uyruğunuzu girin");
if (uyruk.toLowerCase().includes("türk")) {
    uyruk = "türk";
}

if (uyruk === "türk") {
    if (yas > 30) {
        console.log("Aday olabilirsiniz.");
        writeToSonuc("Aday olabilirsiniz.");
    } else if (yas >= 18) {
        console.log("Oy kullanabilirsiniz.");
        writeToSonuc("Oy kullanabilirsiniz.");
    } else {
        console.log("Aday olamazsınız ve oy kullanamazsınız.");
        writeToSonuc("Aday olamazsınız ve oy kullanamazsınız.");
    }
} else if (yas >= 18) {
    console.log("oy kullanabilirsiniz.");
    writeToSonuc("oy kullanabilirsiniz.");
} else {
    console.log("ne aday olabilirsiniz ne de oy kullanabilirsiniz.");
    writeToSonuc("ne aday olabilirsiniz ne de oy kullanabilirsiniz.");
}