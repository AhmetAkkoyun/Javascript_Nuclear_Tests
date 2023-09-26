var ay = prompt("Bir ay ismi girin:").toLowerCase();

switch (ay) {
    case "ocak":
    case "mart":
    case "mayıs":
    case "temmuz":
    case "ağustos":
    case "ekim":
    case "aralık":
        console.log(ay + " ayı 31 gün içerir.");
        writeToSonuc(ay + " ayı 31 gün içerir.");
        break;
        
    case "nisan":
    case "haziran":
    case "eylül":
    case "kasım":
        console.log(ay + " ayı 30 gün içerir.");
        writeToSonuc(ay + " ayı 30 gün içerir.");
        break;

    case "şubat":
        console.log(ay + " ayı 28 veya 29 gün içerir (artık yıl).");
        writeToSonuc(ay + " ayı 28 veya 29 gün içerir (artık yıl).");
        break;

    default:
        console.log("Geçerli bir ay ismi girilmedi.");
        writeToSonuc("Geçerli bir ay ismi girilmedi.");
}
