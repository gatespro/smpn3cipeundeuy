// JavaScript untuk interaksi
const formKegiatan = document.getElementById('formKegiatan');
const daftarKegiatan = document.getElementById('daftarKegiatan');

formKegiatan.addEventListener('submit', (event) => {
    event.preventDefault();
    const kegiatanBaru = document.getElementById('kegiatanBaru').value;
    if (kegiatanBaru) {
        const li = document.createElement('li');
        li.textContent = kegiatanBaru;
        daftarKegiatan.appendChild(li);
        formKegiatan.reset();
    }
});

// Tambahkan data absensi
const siswa = ['Ali', 'Budi', 'Citra'];
const guru = ['Pak Dedi', 'Bu Santi'];

const absenSiswa = document.getElementById('absenSiswa').querySelector('tbody');
const absenGuru = document.getElementById('absenGuru').querySelector('tbody');

siswa.forEach((nama) => {
    const row = `<tr><td>${nama}</td><td>Hadir</td></tr>`;
    absenSiswa.innerHTML += row;
});

guru.forEach((nama) => {
    const row = `<tr><td>${nama}</td><td>Hadir</td></tr>`;
    absenGuru.innerHTML += row;
});
