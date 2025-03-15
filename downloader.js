function downloadMedia() {
    const url = document.getElementById("url").value;
    if (!url) {
        document.getElementById("status").textContent = "Masukkan URL yang valid!";
        return;
    }
    alert("Fitur downloader akan segera hadir!");
}