// ======================================
// DATA PRODUK
// ======================================

const produk = [
    {
        id: 1,
        nama: "Udang Premium",
        harga: 90000,
        gambar: "images/IMG_5874.jpeg",
        emoji: "🦐"
    },
    {
        id: 2,
        nama: "Cumi Premium",
        harga: 90000,
        gambar: "images/IMG_5891.jpeg",
        emoji: "🦑"
    }
];

// ======================================
// DATA KERANJANG
// ======================================

let cart = [];

// ======================================
// TAMPILKAN PRODUK
// ======================================

function tampilProduk(){

    let html = "";

    produk.forEach((item)=>{

        html += `
        <div class="card">

            <div class="badge">
                BEST SELLER
            </div>

            <img src="${item.gambar}" alt="${item.nama}">

            <h2>${item.emoji} ${item.nama}</h2>

            <h3>
                Rp ${item.harga.toLocaleString("id-ID")} / Kg
            </h3>

            <button
                class="pesan"
                onclick="tambahKeranjang(${item.id})">

                Tambah Keranjang

            </button>

        </div>
        `;

    });

    document.getElementById("produk").innerHTML = html;

}

tampilProduk();

// ======================================
// TAMBAH KERANJANG
// ======================================

function tambahKeranjang(id){

    const item = produk.find(p => p.id === id);

    const ada = cart.find(p => p.id === id);

    if(ada){

        ada.qty++;

    }else{

        cart.push({

            ...item,

            qty:1

        });

    }

    tampilKeranjang();

}

// ======================================
// TAMPILKAN KERANJANG
// ======================================

function tampilKeranjang(){

    let html = "";
    let total = 0;

    if(cart.length === 0){

        html = "<p>Keranjang masih kosong.</p>";

    }else{

        cart.forEach(item=>{

            total += item.harga * item.qty;

            html += `

            <div class="cart-item">

                <div class="cart-info">

                    <strong>${item.emoji} ${item.nama}</strong>

                    <p>

                    Rp ${item.harga.toLocaleString("id-ID")} / Kg

                    </p>

                </div>

                <div class="cart-qty">

                    <button onclick="kurangKeranjang(${item.id})">−</button>

                    <span>${item.qty}</span>

                    <button onclick="tambahKeranjang(${item.id})">+</button>

                </div>

                <div class="cart-subtotal">

                    Rp ${(item.harga*item.qty).toLocaleString("id-ID")}

                </div>

                <button class="hapus"

                onclick="hapusProduk(${item.id})">

                ✕

                </button>

            </div>

            `;

        });

    }

    document.getElementById("listCart").innerHTML = html;

    document.getElementById("total").innerHTML =
    "Total : Rp " + total.toLocaleString("id-ID");

}
// ======================================
// KURANGI QTY
// ======================================

function kurangKeranjang(id){

    const item = cart.find(p=>p.id===id);

    if(!item) return;

    item.qty--;

    if(item.qty<=0){

        cart = cart.filter(p=>p.id!==id);

    }

    tampilKeranjang();

}

// ======================================
// HAPUS PRODUK
// ======================================

function hapusProduk(id){

    cart = cart.filter(p=>p.id!==id);

    tampilKeranjang();

}
