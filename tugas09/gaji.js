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
        let gajiPerJamAwal, gajiPerJamSelanjutnya;
        
        if (this.jenis === 'penuh_waktu') {
            gajiPerJamAwal = 100000;
            gajiPerJamSelanjutnya = 75000;
        } else if (this.jenis === 'paruh_waktu') {
            gajiPerJamAwal = 50000;
            gajiPerJamSelanjutnya = 30000;
        } else {
            throw new Error('Jenis karyawan tidak valid');
        }

        const jamAwal = Math.min(this.jamKerjaPerHari, 6);
        const jamSelanjutnya = Math.max(this.jamKerjaPerHari - 6, 0);

        const totalGaji = (jamAwal * gajiPerJamAwal) + (jamSelanjutnya * gajiPerJamSelanjutnya);
        return totalGaji;
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

// =========TESTER=========
const karyawanPenuhWaktu = new KaryawanParuhWaktu('FINZA');
karyawanPenuhWaktu.tambahJamKerja(8); // Menambah jam kerja per hari
console.log(`${karyawanPenuhWaktu.nama} memiliki total gaji: Rp ${karyawanPenuhWaktu.hitungTotalGaji()}`);
