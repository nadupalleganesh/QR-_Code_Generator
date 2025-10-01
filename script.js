let qrcode;

document.getElementById('generateBtn').addEventListener('click', () => {
    let text = document.getElementById('textInput').value.trim();

    if (!text) {
        alert("⚠️ Please enter text or URL!");
        return;
    }

    // Clear previous QR
    document.getElementById('qrcode').innerHTML = "";

    // Generate QR
    qrcode = new QRCode(document.getElementById('qrcode'), {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#212529",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

// Download QR
document.getElementById('downloadBtn').addEventListener('click', () => {
    if (!qrcode) {
        alert("⚠️ Please generate a QR code first!");
        return;
    }

    let qrImg = document.querySelector('#qrcode img');
    if (qrImg) {
        let link = document.createElement('a');
        link.href = qrImg.src;
        link.download = 'QRCode.png';
        link.click();
    } else {
        alert("⚠️ QR code not found!");
    }
});
