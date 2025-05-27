const { createElement } = require("react");


function pencetaku() {
    var nyalakan = document.querySelector('#sembunyikan')
    var nyalakan2 = document.querySelector('#sembunyikan2')
    var nyalakan3 = document.getElementById("exit")
    nyalakan.style.display = "block";
    nyalakan2.style.display = "block";
    nyalakan.style.height = "200rem";
    nyalakan3.style.display = "block"
}
function exit() {
    var keluar = document.getElementById("exit")
    var keluar2 = document.getElementById("sembunyikan2")
    var keluar3 = document.getElementById("sembunyikan")
    keluar.style.display = "none"
    keluar2.style.display = "none"
    keluar3.style.display = "none"

}
function kirimPesan() {
    const nama = document.getElementById("nama").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const jumlah = document.getElementById("jumlah").value;
    const totalpemesanan = document.getElementById('isiantabelpemesanan')
    const noWa = "6288809847754";
    const duit = "10000"
    duit == 10000
    const totalduit = duit * jumlah 
    if (nama, alamat === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tidak bisa pesan,dikarenakan ada yang harus di isi!",

        });
    } else if (alamat, nama === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tidak bisa pesan,dikarenakan ada yang harus di isi!",

        });
    }else {
        const pesan = `Nama : ${nama} \nPesanan kamu  : ${jumlah}\nAlamat : ${alamat}\nQTY : ${jumlah}\nTotal duit yang harus di siapkan sebesar : ${totalduit.toLocaleString('id-ID')}  `;
        const linkWa = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`;
        window.open(linkWa, "_blank");
    }

}
function cart2() {
    const nama = document.getElementById("nama").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const jumlah = document.getElementById("jumlah").value;
    const totalpemesanan = document.getElementById('isiantabelpemesanan')
    const noWa = "6288809847754";
    const duit = "10000"
    duit == 10000
    const total = duit.toLocaleString('id-ID',)
    const totalduit = total * jumlah 
    const h2keranjang = document.getElementById('h2isiankeranjang')
    const h3keranjang = document.getElementById('h3isiankeranjang')
    const pesan = document.getElementById('pesan')
    if (nama, alamat === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tidak bisa pesan,dikarenakan ada yang harus di isi!",
            
        });
    } else if (alamat, nama === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tidak bisa pesan,dikarenakan ada yang harus di isi!",
            
        });
    }else {
        pesan.style.display = "block"
        h3keranjang.style.display  = "none"
        totalpemesanan.innerHTML = `
        <h4 style = "font-size:25px;">Nama Pemesan : ${nama}</h4>
        <h4 style = "font-size:25px;">Alamat : ${alamat}</h4>
        <h4 style = "font-size:25px;">Total produk yang dipesan : ${jumlah}</h4> 
        <h4 style = "font-size:25px;">Total Duit yang harus Disiapkan : ${totalduit.toLocaleString('id-ID')}`
    }

}
function tambah() {
    const input = document.getElementById('jumlah');
    input.value = parseInt(input.value) + 1;
}

function kurangi() {
    const input = document.getElementById('jumlah');
    const current = parseInt(input.value);
    if (current > 1) {
        input.value = current - 1;
    }
}
var keranjang = document.getElementById("cart")
var tambahkan_keranjang = document.getElementById('button-keranjang')
var tampilkankeranjang = document.getElementById('isiankeranjang')

function cart() {
    tampilkankeranjang.style.display = "block"



}

function keluar() {
    tampilkankeranjang.style.display = "none"
}

function masukankeranjang() {
    const nama = document.getElementById("nama").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const jumlah = document.getElementById("jumlah").value;
}

