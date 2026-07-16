const produk = [

{

nama:"Udang Premium",

harga:90000,

gambar:"images/IMG_5874.jpeg",

emoji:"🦐"

},

{

nama:"Cumi Premium",

harga:90000,

gambar:"images/IMG_5891.jpeg",

emoji:"🦑"

}

];

let html="";

produk.forEach((item,index)=>{

html+=`

<div class="card">

<img src="${item.gambar}">

<h2>${item.emoji} ${item.nama}</h2>

<h3>Rp${item.harga.toLocaleString("id-ID")} / Kg</h3>

<div class="qty">

<button onclick="kurang(${index})">−</button>

<span id="qty${index}">0</span>

<button onclick="tambah(${index})">+</button>

</div>

<button class="pesan">

Tambah Keranjang

</button>

</div>

`;

});

document.getElementById("produk").innerHTML=html;

let qty=[0,0];

function tambah(i){

qty[i]++;

document.getElementById("qty"+i).innerHTML=qty[i];

}

function kurang(i){

if(qty[i]>0){

qty[i]--;

document.getElementById("qty"+i).innerHTML=qty[i];

}

}
