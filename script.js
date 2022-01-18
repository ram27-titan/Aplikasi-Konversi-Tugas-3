var tanya = true;
while (tanya) {
  var nilai = parseInt(prompt('Masukkan Nilai 1 - 100 !!'));

  if (nilai >= 90 && nilai <= 100) {
    alert('Wow!! Luarbiasa, Nilai Anda A');
  } else if (nilai >= 80 && nilai <= 89) {
    alert('Luarbiasa , Nilai Anda AB');
  } else if (nilai >= 70 && nilai <= 79) {
    alert('Selamat Nilai Anda B');
  } else if (nilai >= 60 && nilai <= 69) {
    alert('Belajar Lagi ya Nilai Anda BC');
  } else if (nilai >= 50 && nilai <= 59) {
    alert('Tetap Semangat dan Belajar yang giat lagi Nailai anda C');
  } else if (nilai >= 40 && nilai <= 49) {
    alert('Aduh !!, Harus lebih giat lagi belajarnya ya Nilai anda D');
  } else if (nilai >= 0 && nilai <= 39) {
    alert('Sangat Buruk Nilai anda E');
  } else {
    alert('Masukkan Nilai Dengan Benar!!!');
  }
  var tanya = confirm('Ulangi Konversi?');
}
