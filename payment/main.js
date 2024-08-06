function formatCurrency(amount) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount);
}

function Pilihan() {
    let pilihan = document.getElementById("inp_pilihan").value;
    let hargaPiala = 0;

    switch (pilihan) {
        case "PCM1":
            hargaPiala = 65000;
            break;
        case "PCM2":
            hargaPiala = 65000;
            break;
        case "PCM3":
            hargaPiala = 65000;
            break;
        case "PMM1":
            hargaPiala = 50000;
            break;
        case "PMM2":
            hargaPiala = 50000;
            break;
        case "PMM3":
            hargaPiala = 50000;
            break;
        case "PKM1":
            hargaPiala = 45000;
            break;
        case "PKM2":
            hargaPiala = 45000;
            break;
        case "PKM3":
            hargaPiala = 45000;
            break;
        case "PBM1":
            hargaPiala = 70000;
            break;
        case "PBM2":
            hargaPiala = 70000;
            break;
        case "PBM3":
            hargaPiala = 70000;
            break;
        case "PSM1":
            hargaPiala = 50000;
            break;
        case "PSM2":
            hargaPiala = 50000;
            break;
        case "PSM3":
            hargaPiala = 50000;
            break;               
        default:
            hargaPiala = 0;
            break;
    }

    document.getElementById("tampil1").value =formatCurrency(hargaPiala);
    document.getElementById("inp_jumlah").value = 1;
    Total();
}

function Pengiriman() {
    let pengiriman = document.getElementById("inp_pengiriman").value;
    let hargaPengiriman = 0;

    switch (pengiriman) {
        case "JNE":
            hargaPengiriman = 11000;
            break;
        case "SiCepat":
            hargaPengiriman = 15000;
            break;
        case "GO-Send":
            hargaPengiriman = 9000;
            break;
        default:
            hargaPengiriman = 0;
            break;
    }

    document.getElementById("tampil2").value =formatCurrency(hargaPengiriman);
    Total();
}

function Total() {
    let jumlah = parseInt(document.getElementById("inp_jumlah").value.replace(/\D/g, ""));
    let hargaPiala = parseInt(document.getElementById("tampil1").value.replace(/\D/g, ""));
    let hargaPengiriman = parseInt(document.getElementById("tampil2").value.replace(/\D/g, ""));

    if (isNaN(jumlah)) {
        jumlah = 0;
    }

    if (isNaN(hargaPiala)) {
        hargaPiala = 0;
    }

    if (isNaN(hargaPengiriman)) {
        hargaPengiriman = 0;
    }

    let total = hargaPiala * jumlah + hargaPengiriman;
    document.getElementById("total").value = formatCurrency(total);
}
function pesan() {
    let nama = document.getElementById("inp_nama").value;
    let alamat = document.getElementById("inp_alamat").value;
    let pilihan = document.getElementById("inp_pilihan").value;
    let jumlah = document.getElementById("inp_jumlah").value;
    let pengiriman = document.getElementById("inp_pengiriman").value;
    let catatan = document.getElementById("inp_req").value;
    let total = document.getElementById("total").value;
	
	if (nama.trim() === "" || alamat.trim() === "" || pilihan.trim() === "--PILIH PIALA SESUAI KODE--" || isNaN(jumlah) || pengiriman.trim() === "--PILIH PENGIRIMAN--") {
        alert("Harap isi dengan lengkap Data Pemesanan Piala");
        return;
      }
	
	document.getElementById("nameCell").textContent = nama;
    document.getElementById("addressCell").textContent = alamat;
    document.getElementById("pialaCell").textContent = pilihan;
    document.getElementById("quantityCell").textContent = jumlah;
    document.getElementById("shippingCell").textContent = pengiriman;
    document.getElementById("requestCell").textContent = catatan;
    document.getElementById("totalCell").textContent = total;

    document.getElementById("invoice-container").style.display = "block";
}