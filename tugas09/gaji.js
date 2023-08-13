class Karyawan {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
        this.jamKerjaPerHari = 0;
    }

    tambahJamKerja(jam) {
        this.jamKerjaPerHari += jam;
    }

    hitungTotalGaji() {
        let tarif;
        if (this.jenis === 'penuh_waktu') {
            tarif = this.jamKerjaPerHari > 6 ? 75000 : 100000;
        } else if (this.jenis === 'paruh_waktu') {
            tarif = this.jamKerjaPerHari > 6 ? 30000 : 50000;
        } else {
            throw new Error('Jenis karyawan tidak valid');
        }
        return this.jamKerjaPerHari * tarif;
    }
}

class KaryawanPenuhWaktu extends Karyawan {
    constructor(nama) {
        super(nama, 'penuh_waktu');
    }
}

class KaryawanParuhWaktu extends Karyawan {
    constructor(nama) {
        super(nama, 'paruh_waktu');
    }
}

// Contoh penggunaan
const karyawanPenuhWaktu = new KaryawanPenuhWaktu('Adawiyah');
karyawanPenuhWaktu.tambahJamKerja(8); // Menambah jam kerja per hari
console.log(`${karyawanPenuhWaktu.nama} memiliki total gaji: Rp ${karyawanPenuhWaktu.hitungTotalGaji()}`);
