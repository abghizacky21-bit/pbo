class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
    console.log(`${this.nama} sedang belajar.`);
  }
}

// Membuat objek dari class Mahasiswa
const mhs1 = new Mahasiswa("Abgh1", "23012345", "Teknik Informatika");
mhs1.belajar();

const mhs2 = new Mahasiswa("Udin", "23012355", "Teknik Informatika");
mhs1.belajar();

