document.getElementById('registrationForm').addEventListener('submit', function() {
    let nama = document.getElementById('nama').value.trim();
    let email = document.getElementById('email').value.trim();
    let alamat = document.getElementById('alamat').value.trim();

    if (nama === "" || email === "" || alamat === "") {
        alert("Semua data harus diisi.");
    } else {
        alert("Pendaftaran berhasil!");
    }
});
