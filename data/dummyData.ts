import dummy from "../assets/images/header-pic-small.jpg";
import {
  ensiklopedia,
  shopping,
  shipping,
  artikel,
} from "../assets/illustration";
import pic from "../assets/images/header-pic-small.jpg";

import seed from "../assets/Plant/anggrek-seed.jpg";
import tuber from "../assets/Plant/anggrek-tuber.jpg";
import juvenil from "../assets/Plant/anggrek-juvenil.jpg";
import mature from "../assets/Plant/anggrek-mature.jpg";
import image from "../assets/Plant/cherrytomatomature.jpg";

export const products = [
  { id: 1, name: "Jakarta", category: "hias", img: dummy },
  { id: 2, name: "Bogor", category: "hias", img: dummy },
  { id: 3, name: "Depok", category: "hias", img: dummy },
  { id: 4, name: "Tangerang", category: "hias", img: dummy },
  { id: 5, name: "Bekasi", category: "hias", img: dummy },
  { id: 6, name: "Pondok Cina", category: "hias", img: dummy },
  { id: 7, name: "Sudirman", category: "hias", img: dummy },
  { id: 8, name: "Kasablangka", category: "hias", img: dummy },
  { id: 9, name: "Pondok Indah", category: "hias", img: dummy },
  { id: 10, name: "Pondok Gede", category: "hias", img: dummy },
  { id: 11, name: "Jakarta Barat", category: "sayur", img: dummy },
  { id: 12, name: "Jakarta Selatan", category: "sayur", img: dummy },
  { id: 13, name: "Jakarta Pusat", category: "sayur", img: dummy },
  { id: 14, name: "Jakarta Timur", category: "sayur", img: dummy },
  { id: 15, name: "Jakarta Utara", category: "sayur", img: dummy },
  { id: 16, name: "Depok Baru", category: "sayur", img: dummy },
  { id: 17, name: "Depok Lama", category: "sayur", img: dummy },
  { id: 18, name: "Bandung", category: "sayur", img: dummy },
  { id: 19, name: "Lautan", category: "sayur", img: dummy },
  { id: 20, name: "Api", category: "sayur", img: dummy },
  { id: 21, name: "Surabaya", category: "buah", img: dummy },
  { id: 22, name: "Suramadu", category: "buah", img: dummy },
  { id: 23, name: "Madura", category: "buah", img: dummy },
  { id: 24, name: "Kalimantan", category: "buah", img: dummy },
  { id: 25, name: "Sulawesi", category: "buah", img: dummy },
  { id: 26, name: "Papua", category: "buah", img: dummy },
  { id: 27, name: "Aceh", category: "buah", img: dummy },
  { id: 28, name: "Yogyakarta", category: "buah", img: dummy },
  { id: 29, name: "Medan", category: "buah", img: dummy },
  { id: 30, name: "Balikpapan", category: "buah", img: dummy },
  { id: 31, name: "Singapura", category: "rempah", img: dummy },
  { id: 32, name: "China", category: "rempah", img: dummy },
  { id: 33, name: "Brazil", category: "rempah", img: dummy },
  { id: 34, name: "Panama", category: "rempah", img: dummy },
  { id: 35, name: "Argentina", category: "rempah", img: dummy },
  { id: 36, name: "Juventus", category: "rempah", img: dummy },
  { id: 37, name: "Milan", category: "rempah", img: dummy },
  { id: 38, name: "Barcelona", category: "rempah", img: dummy },
  { id: 39, name: "Madrid", category: "rempah", img: dummy },
  { id: 40, name: "Manchester United", category: "rempah", img: dummy },
  { id: 41, name: "Manchester City", category: "rempah", img: dummy },
];

export const productsCategory = products
  .map((item) => item.category)
  .filter((item, index, arr) => arr.indexOf(item) === index);

export const valueProps = [
  {
    name: "Ensiklopedia",
    img: ensiklopedia,
  },
  {
    name: "Belanja Online",
    img: shopping,
  },
  {
    name: "Artikel",
    img: artikel,
  },
  {
    name: "Kurir Pribadi",
    img: shipping,
  },
];

export const reviews = [
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam. psum dolor sit amet,",
    img: pic,
    rating: 4,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 5,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 4,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 4,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 5,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 5,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 4,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 5,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 4,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 3,
  },
  {
    name: "Nama User",
    created: "2 hari yang lalu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    img: pic,
    rating: 4,
  },
];

export const plant = {
  seed,
  tuber,
  juvenil,
  mature,
};

export const cartItems = [
  {
    img: seed,
    name: "Lavender",
    phase: "Biji",
    price: "Rp 21.950",
    quantity: 1,
  },
  {
    img: tuber,
    name: "Lavender",
    phase: "Bonggol",
    price: "Rp 21.950",
    quantity: 1,
  },
  {
    img: juvenil,
    name: "Lavender",
    phase: "Muda",
    price: "Rp 21.950",
    quantity: 1,
  },
  {
    img: mature,
    name: "Lavender",
    phase: "Dewasa",
    price: "Rp 21.950",
    quantity: 1,
  },
];

export const transactions = [
  {
    img: seed,
    name: "Lavender",
    phase: "Biji",
    price: "Rp 21.950",
    quantity: 1,
    totalPrice: "Rp 120.067",
    created: "4 Mei 2021",
    no_order: "lkjascLKJLKFklhadsl",
    status: "Menunggu Pembayaran",
  },
  {
    img: seed,
    name: "Lavender",
    phase: "Biji",
    price: "Rp 21.950",
    quantity: 1,
    totalPrice: "Rp 120.067",
    created: "4 Mei 2021",
    no_order: "lkjascLKJLKFklhadsl",
    status: "Verifikasi Pembayaran",
  },
  {
    img: seed,
    name: "Lavender",
    phase: "Biji",
    price: "Rp 21.950",
    quantity: 1,
    totalPrice: "Rp 120.067",
    created: "4 Mei 2021",
    no_order: "lkjascLKJLKFklhadsl",
    status: "Pesanan Diantar",
  },
  {
    img: seed,
    name: "Lavender",
    phase: "Biji",
    price: "Rp 21.950",
    quantity: 1,
    totalPrice: "Rp 120.067",
    created: "4 Mei 2021",
    no_order: "lkjascLKJLKFklhadsl",
    status: "Transaksi Selesai",
  },
];

export const invoiceProduct = [
  {
    img: seed,
    name: "Lavender",
    phase: "Biji",
    price: "Rp 21.950",
    quantity: 1,
    review: false,
  },
  {
    img: tuber,
    name: "Lavender",
    phase: "Bonggol",
    price: "Rp 21.950",
    quantity: 1,
    review: false,
  },
  {
    img: juvenil,
    name: "Lavender",
    phase: "Muda",
    price: "Rp 21.950",
    quantity: 1,
    review: true,
  },
  {
    img: mature,
    name: "Lavender",
    phase: "Dewasa",
    price: "Rp 21.950",
    quantity: 1,
    review: false,
  },
];

export const articles = [
  {
    img: image,
    title: "Lorem judul ipsum dolor sit",
    author: "Author",
    release_date: "30 April 2021",
    reading_time: 3,
  },
  {
    img: image,
    title: "Lorem judul ipsum dolor sit",
    author: "Author",
    release_date: "30 April 2021",
    reading_time: 3,
  },
  {
    img: image,
    title: "Lorem judul ipsum dolor sit",
    author: "Author",
    release_date: "30 April 2021",
    reading_time: 3,
  },
  {
    img: image,
    title: "Lorem judul ipsum dolor sit",
    author: "Author",
    release_date: "30 April 2021",
    reading_time: 3,
  },
  {
    img: image,
    title: "Lorem judul ipsum dolor sit",
    author: "Author",
    release_date: "30 April 2021",
    reading_time: 3,
  },
];

export const addresses = [
  {
    name: "Dhika Adhiwijna",
    phone: "085156493800",
    city: "Jakarta",
    postal: "15222",
    route: "Jl. Senoparty - Gerbang Putih No. 33",
  },
  {
    name: "Yudi Irwanto",
    phone: "085156493810",
    city: "Tangerang",
    postal: "15332",
    route: "Jl. Alam Sutra - Lt. 17 Nawadata Tower",
  },
  {
    name: "Hanendyo Indira",
    phone: "085156493844",
    city: "Bogor",
    postal: "15222",
    route: "Jl. Cibeureum - Gerbang Hijau Muda No. 21",
  },
  {
    name: "Fajar Riadi",
    phone: "085156493801",
    city: "Kab. Tangerang",
    postal: "15213",
    route: "Jl. Salembaran Kosambi - Depan Bakso Zahra",
  },
];
