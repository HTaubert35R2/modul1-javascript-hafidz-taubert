const namasiswa = "Hafidz Khoirul Taubert";
let age = 16;
const school = "SMK Telkom Malang";
let hasGraduated = false;
const hobi = ["Volleyball","Gaming","Reading"];

const identitas = {
    Nama: namasiswa,
    Umur: age,
    Sekolah: school,
    Lulus: hasGraduated,
    Hobi: hobi,
    Nilai: {
        Matematika: 90,
        BahasaInggris: 85,
    }
}
identitas.statusAktif = true;

console.log(identitas);