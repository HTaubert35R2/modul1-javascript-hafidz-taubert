const namasiswa = "Hafidz Khoirul Taubert";
let age = 16;
const school = "SMK Telkom Malang";
let hasGraduated = false;
const hobi = ["Volleyball","Gaming","Reading"];
let family

let identitas = {
    Nama: namasiswa,
    Umur: age,
    Sekolah: school,
    Lulus: hasGraduated,
    Hobi: hobi,
    Nilai: {
        Matematika: 90,
        BahasaInggris: 85,
    },
    Keluarga: family
}


identitas.statusAktif = true;
identitas.kota = "Malang";
delete identitas.Hobi;


console.log(identitas);