const HARGA_UDANG = 90000;
const HARGA_CUMI = 90000;

function formatRupiah(angka){
    return new Intl.NumberFormat("id-ID").format(angka);
}

function pesan(){

    let nama=document.getElementById("nama").value.trim();
    let hp=document.getElementById("hp").value.trim();
    let alamat=document.getElementById("alamat").value.trim();
    let catatan=document.getElementById("catatan").value.trim();

    let udang=parseFloat(document.getElementById("udang").value)||0;
    let cumi=parseFloat(document.getElementById("cumi").value)||0;

    if(nama==""){
        alert("Nama wajib diisi");
        return;
    }

    if(hp==""){
        alert("Nomor HP wajib diisi");
        return;
    }

    if(alamat==""){
        alert("Alamat wajib diisi");
        return;
    }

    if(udang<=0 && cumi<=0){
        alert("Pilih minimal satu produk");
        return;
    }

    let totalUdang=udang*HARGA_UDANG;
    let totalCumi=cumi*HARGA_CUMI;

    let total=totalUdang+totalCumi;

    let pesanWA=
`Halo Admin SMC Seafood

Saya ingin memesan.

Nama : ${nama}

HP : ${hp}

Alamat :
${alamat}

==================

🦐 Udang : ${udang} Kg

🦑 Cumi : ${cumi} Kg

==================

Total :
Rp${formatRupiah(total)}

Catatan :
${catatan}`;

    let nomor="628131818922";

    window.open(
    "https://wa.me/"+nomor+"?text="+encodeURIComponent(pesanWA),
    "_blank");

}
