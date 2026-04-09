document.getElementById('tampil').onclick = function () {

  var nama = document.getElementById('nama').value.trim();
  if (nama === "") {
    nama = "(Nama belum diisi)";
  }

  var kelas = document.getElementById('kelas').value.trim();
  if (kelas === "") {
    kelas = "(Kelas belum diisi)";
  }

  
  var ekstra = document.getElementsByName('EKSTRAKULIKULER');
  var listEkstra = [];

  for (var i = 0; i < ekstra.length; i++) {
    if (ekstra[i].checked) {
      listEkstra.push(ekstra[i].value);
    }
  }

  if (listEkstra.length === 0) {
    listEkstra = ["(Belum pilih ekstrakurikuler)"];
  }

 
  var jadwal = "";
  var radios = document.getElementsByName('JADWAL');

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      jadwal = radios[i].value;
      break;
    }
  }

  if (jadwal === "") {
    jadwal = "(Belum pilih jadwal)";
  }

  
  if (jadwal === "1") jadwal = "Pagi";
  else if (jadwal === "2") jadwal = "Siang";
  else if (jadwal === "3") jadwal = "Sore";
  else if (jadwal === "4") jadwal = "Campuran";

 
  var hasilText =
    "Nama: " + nama + "\n" +
    "Kelas: " + kelas + "\n" +
    "Ekstrakurikuler: " + listEkstra.join(", ") + "\n" +
    "Jadwal: " + jadwal;

  document.getElementById('output').innerText = hasilText;
}