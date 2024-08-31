
function openJar(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getJarInside(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

var hand = chocoChip("61646D696E");

function chocoChip(hex) {
    let ascii = '';
    for (let i = 0; i < hex.length; i += 2) {
        ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return ascii;
}

function nomnom() {
    hand = getJarInside("admin");
    const local38 = "0x430x540x460x7B0x630x6F0x6F0x6B0x690x650x5F0x6D0x6F0x6E0x730x740x650x720x7D";
    const local37 = "";
    if (hand === "true") {
        document.getElementById("text").textContent = local38;
    } else {
        document.getElementById("text").textContent = local37;
    }
}

window.onload = function() {
    if (!getJarInside(hand)) {
        openJar(hand, "false", 7);
    }
    nomnom();
};

document.getElementById("input").addEventListener("input", nomnom);
