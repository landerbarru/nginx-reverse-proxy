document.getElementById("kontaktu-formularioa").addEventListener("submit", function (event) {
    event.preventDefault()

    const telefonoa = document.getElementById("tlf").value.trim();
    const email = document.getElementById("email").value.trim();
    const posta = document.getElementById("posta-kodea").value.trim();
    const mezua = document.getElementById("mezua").value.trim();
    const mezumota = document.querySelector('input[name="mota"]:checked');
    const babesa = document.getElementById("babesa").checked;

    let ondo = true;

    if (telefonoa.length === 9) {
        alert("Telefonoa ondo sartu duzu.");
    } else {
        alert("Telefonoa txarto jarri duzu.");
        ondo = false
    }
    if (email.includes("@") && email.includes(".")) {
        alert("Email-a ondo jarri duzu.");
    } else {
        alert("@ eta . jarri behar dituzu.");
        ondo = false
    }

    if (posta.length === 5) {
        alert("Posta-kodea ondo sartu duzu.");
    } else {
        alert("Posta-kodeak 5 zenbaki ditu.");
        ondo = false
    }
    if (mezua.length >= 20) {
        alert("Eskerrik asko zure mezuarengaitik.");
    } else {
        alert("Mezuak gutxienez 20 karaktere izan behar ditu.");
        ondo = false
    }
    console.log("mezumota:", mezumota, "ondo:", ondo);
    if (mezumota === null) {
        alert("Mezu mota bat aukeratu behar duzu.");
        ondo = false
    } else {
        alert("zuk emandako informazioa kontutan hartuko da.")
    }
    if (babesa === false) {
        alert("Datuen babesa onartu behar duzu.");
        ondo = false
    } else {
        alert("Eskerrik asko.")
    }
    if (ondo === true) {
        let orduak = 0;
        if (mezumota.value === "zalantza") {
            orduak = 24;
        } else if (mezumota.value === "iradokizuna") {
            orduak = 72;
        } else if (mezumota.value === "kexa") {
            orduak = 12;
        } else {
            orduak = 48;
        }
        const data = new Date();
        const eguna = data.getDay();
        const ordu = data.getHours();

        if (eguna === 0 || eguna === 6) {
            orduak = orduak + 12;
        } else if (ordu >= 18) {
            orduak = orduak + 8;
        }
        alert("Eskaera ondo bidali da.\n" +
            "telefonoa:" + telefonoa + "\n" +
            "Email-a:" + email + "\n" +
            "Posta-kodea:" + posta + "\n" +
            "Mezu mota:" + mezumota.value + "\n" +
            "Mezua:" + mezua + "\n" +
            "Erantzun denboraren eztimazioa:" + orduak + "ordu.");
    }
});
document.getElementById("mezua").addEventListener("input", function () {
    document.getElementById("kontagailua").textContent = this.value.length + "/500 karaktere";
});