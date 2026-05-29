// src/lib/osnkData.ts

export interface OsnkQuestion {
  id: number;
  type: 'pg' | 'isian' | 'bs';
  question: string;
  codeBlock?: string;
  visualType?: 'ascii' | 'mermaid' | 'none';
  visualCode?: string;
  options?: string[]; // Khusus PG
  correctAnswer: string; // "A"/"B"/"C" dst untuk PG, string teks untuk Isian, "BENAR"/"SALAH" untuk B/S
  explanation: string;
}

export const osnkPaket1: OsnkQuestion[] = [
  // --- BAGIAN A: ANALITIKA, LOGIKA & BERPIKIR KOMPUTASIONAL ---
  {
    id: 1,
    type: 'pg',
    question: `Pada suatu pagi yang cerah di Desa Algoria, Pak Dengklek sedang mencari tahu siapa yang mencuri resep pakan bebek rahasianya. Desa tersebut hanya dihuni oleh dua jenis bebek: Bebek Jujur yang selalu mengatakan kebenaran, dan Bebek Dusta yang selalu berbohong. Pak Dengklek menginterogasi empat ekor bebek yang dicurigai: Kwak, Kwik, Kwuk, dan Kwek.\n\nMereka memberikan pernyataan yang sangat membingungkan sebagai berikut:\n- Kwak berkata: "Tepat ada satu Bebek Dusta di antara kami berempat."\n- Kwik berkata: "Tidak, kalian jangan percaya! Tepat ada dua Bebek Dusta di antara kami berempat."\n- Kwuk berkata: "Kalian berdua salah! Tepat ada tiga Bebek Dusta di antara kami."\n- Kwek berseru: "Kalian bertiga pembohong! Tepat ada empat Bebek Dusta di antara kita semua!"\n\nSetelah menganalisis pernyataan tersebut menggunakan logika deduktif, berapakah jumlah Bebek Jujur yang sebenarnya ada di antara mereka berempat?`,
    options: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3",
      "E. 4"
    ],
    correctAnswer: "B",
    explanation: "Karena keempat bebek memberikan klaim yang saling bertentangan secara eksklusif mengenai jumlah pembohong, maksimal hanya ada satu bebek yang mengatakan kebenaran. Jika semuanya pembohong (0 jujur), maka pernyataan Kwek ('ada empat pembohong') seharusnya benar, yang berarti Kwek adalah Bebek Jujur (hal ini memicu kontradiksi). Maka pasti ada tepat 1 Bebek Jujur dan 3 Bebek Dusta. Bebek yang secara akurat mengatakan 'tepat ada tiga Bebek Dusta' adalah Kwuk. Jadi, hanya Kwuk yang merupakan Bebek Jujur."
  },
  {
    id: 2,
    type: 'isian',
    question: `Musim hujan telah tiba. Pak Dengklek memiliki 10 pasang sepatu bot tahan air yang berbeda-beda warna dan polanya (total 20 sebelah sepatu) yang tersimpan acak di dalam sebuah karung gelap di gudang. Karena mati lampu, Pak Dengklek tidak bisa melihat ke dalam karung dan hanya bisa merogoh lalu mengambil sepatu secara acak satu per satu.\n\nBerapa minimal jumlah sebelah sepatu yang harus diambil Pak Dengklek dari dalam karung tersebut untuk memastikan dengan mutlak (100% pasti) bahwa ia mendapatkan setidaknya satu pasang sepatu bot yang cocok (sebelah kiri dan kanan dari warna/pola yang persis sama) untuk dipakainya ke sawah?`,
    correctAnswer: "11",
    explanation: "Masalah ini diselesaikan menggunakan Pigeonhole Principle (Prinsip Sarang Merpati). Skenario terburuk (worst-case scenario) adalah Pak Dengklek secara tidak beruntung mengambil semua sepatu sebelah kiri (atau kanan) dari ke-10 jenis sepatu bot tersebut. Pada titik ini, ia telah memegang 10 sebelah sepatu, dan belum ada satupun yang sepasang. Pengambilan ke-11 sudah pasti merupakan pasangan (kiri/kanan) dari salah satu dari 10 sepatu yang sudah berada di tangannya."
  },
  {
    id: 3,
    type: 'bs',
    question: `Kwak, bebek Pak Dengklek yang paling gemar membaca buku tentang Teori Graf, baru saja merancang sistem saluran irigasi air untuk N buah petak sawah. Ia menggunakan tepat N - 1 buah pipa bambu, di mana setiap pipa menghubungkan dua petak sawah secara dua arah (undirected).\n\nKwak dengan sombongnya mengklaim: "Karena aku menggunakan tepat N - 1 pipa untuk N petak sawah, maka sistem irigasiku ini PASTI membentuk sebuah Pohon (Tree) yang sempurna, sehingga air dari petak manapun pasti bisa mengalir ke petak manapun!"\n\nBerdasarkan definisi matematis dari graf, apakah klaim Kwak tersebut BENAR atau SALAH?`,
    correctAnswer: "SALAH",
    explanation: "Sebuah graf dengan N simpul dan N - 1 sisi tidak secara otomatis menjamin graf tersebut terhubung (connected). Bisa jadi graf tersebut memiliki siklus (cycle) di satu sub-komponen, dan membiarkan satu atau lebih simpul terisolasi di tempat lain (disconnected). Syarat mutlak dan cukup sebuah graf menjadi Tree adalah harus 'Terhubung' DAN 'Tidak memiliki siklus'."
  },
  {
    id: 4,
    type: 'pg',
    question: `Untuk merayakan ulang tahun kemerdekaan, Pak Dengklek mengadakan lomba "Oper Semangka Panas". Kwak, Kwik, Kwuk, Kwek, dan Kwok berdiri melingkar bebas. Semangka dimulai dari sayap Kwak. Setiap detik, bebek yang memegang semangka harus mengoper secara acak ke salah satu dari 4 bebek lainnya (tidak boleh memegang semangka lebih dari sedetik).\n\nPak Dengklek bertanya-tanya, dengan aturan kombinatorika dinamik, ada berapa banyak rute operan semangka yang mungkin terjadi sedemikian sehingga semangka tersebut kembali berada di sayap Kwak tepat pada detik ke-4?`,
    options: [
      "A. 21",
      "B. 40",
      "C. 52",
      "D. 64",
      "E. 256"
    ],
    correctAnswer: "C",
    explanation: "Total kombinasi operan selama 4 detik adalah 4^4 = 256. Kita gunakan relasi rekurensi: A(n) = jumlah cara bola di Kwak pada detik n. Rumus perpindahan status untuk 5 entitas (Kwak + 4 bebek lain) adalah: A(n) = 4^(n-1) - A(n-1). Mari kita hitung dari awal: Detik 1: A(1)=0 (karena Kwak tidak bisa mengoper ke dirinya sendiri). Detik 2: A(2) = 4^1 - 0 = 4. Detik 3: A(3) = 4^2 - 4 = 16 - 4 = 12. Detik 4: A(4) = 4^3 - 12 = 64 - 12 = 52. Maka ada 52 kemungkinan rute operan."
  },
  {
    id: 5,
    type: 'isian',
    question: `Di depan pintu gudang pakan rahasianya, Pak Dengklek memasang gembok digital canggih. Gembok ini membutuhkan kata sandi (password) yang terdiri dari tepat 6 huruf kapital (A-Z). Untuk alasan keamanan, Pak Dengklek mensyaratkan sandi tersebut harus "KUAT", yang didefinisikan sebagai: Sandi WAJIB memuat setidaknya satu buah huruf vokal (A, E, I, O, U).\n\nKwik mencoba meretas gembok tersebut. Berapa banyak maksimum kemungkinan kata sandi KUAT yang harus Kwik coba? (Tuliskan dalam format aljabar eksponensial murni tanpa spasi, contoh format: 26^6-21^6).`,
    correctAnswer: "26^6-21^6",
    explanation: "Permasalahan ini paling efisien diselesaikan dengan Prinsip Inklusi-Eksklusi (Komplemen). Total semua kemungkinan kombinasi 6 huruf kapital sembarang adalah 26^6. Kombinasi sandi yang 'TIDAK KUAT' (semuanya terdiri dari huruf konsonan murni) adalah 21^6 (karena ada 21 konsonan). Maka, jumlah sandi yang memuat setidaknya satu huruf vokal adalah Total Semesta dikurangi Total Kasus Dilarang = 26^6 - 21^6."
  },
  {
    id: 6,
    type: 'pg',
    question: `Kwek sedang mengawasi 1000 kandang bertingkat milik Pak Dengklek yang berjejer dan dinomori 1 hingga 1000. Awalnya, semua pintu kandang tertutup rapat. Tiba-tiba, 1000 ekor bebek nakal berlari melewati barisan kandang tersebut satu per satu secara berurutan (Bebek 1, lalu Bebek 2, hingga Bebek 1000).\n\nBebek bernomor ke-i memiliki kebiasaan aneh: ia akan menekan tuas setiap pintu kandang yang nomornya adalah KELIPATAN dari i (jika pintu tertutup menjadi terbuka, jika terbuka menjadi tertutup).\nSetelah ke-1000 bebek selesai berulah, Pak Dengklek menemukan hanya pintu-pintu dengan karakteristik tertentu yang tersisa dalam keadaan TERBUKA. Karakteristik apakah itu?`,
    options: [
      "A. Pintu dengan nomor bilangan prima",
      "B. Pintu dengan nomor ganjil",
      "C. Pintu dengan nomor genap",
      "D. Pintu dengan nomor kuadrat sempurna",
      "E. Pintu dengan nomor kelipatan 10"
    ],
    correctAnswer: "D",
    explanation: "Sebuah pintu bernomor N akan ditekan tuasnya sebanyak jumlah faktor pembagi positif dari N. Pintu akan berakhir terbuka jika dan hanya jika ia ditekan dalam jumlah ganjil (Tertutup -> Buka -> Tutup -> Buka...). Sebuah bilangan bulat memiliki jumlah faktor positif ganjil HANYA JIKA bilangan tersebut adalah kuadrat sempurna, karena semua faktor pembaginya selalu berpasangan, kecuali akar kuadrat dari bilangan tersebut yang berpasangan dengan dirinya sendiri."
  },
  {
    id: 7,
    type: 'isian',
    question: `Setelah panen jagung yang melimpah, Pak Dengklek menabung di Bank Algoritma dengan saldo awal 10.000 Koin. Bank ini memiliki sistem bunga yang agresif: setiap awal bulan, saldo nasabah akan dikalikan 2. Namun, di akhir bulan yang sama, bank langsung memotong 3.000 Koin sebagai biaya administrasi keamanan kandang.\n\nJika sistem ini dibiarkan berjalan secara rekursif, berapakah total saldo Koin Pak Dengklek tepat setelah potongan administrasi di akhir bulan ke-10?`,
    correctAnswer: "7171000",
    explanation: "Model matematikanya adalah barisan rekurensi: S(n) = 2*S(n-1) - 3000. Untuk mencari rumus tertutup, kita cari titik tetap (fixed point) dimana x = 2x - 3000 -> x = 3000. Maka persamaannya bisa diubah bentuknya menjadi (S(n) - 3000) = 2 * (S(n-1) - 3000). Ini adalah barisan geometri murni dengan rasio 2. Maka formulanya adalah S(n) - 3000 = (S(0) - 3000) * 2^n. Menghitung bulan ke-10: S(10) = (10000 - 3000) * 2^10 + 3000 = 7000 * 1024 + 3000 = 7.168.000 + 3000 = 7.171.000."
  },
  {
    id: 8,
    type: 'bs',
    question: `Kwak dan Kwik sedang bermalas-malasan di pinggir kolam sambil memainkan permainan NIM klasik menggunakan 3 tumpukan ikan kecil. Jumlah ikan pada masing-masing tumpukan adalah 3, 5, dan 7 ekor. \n\nAturannya baku: Pemain secara bergiliran mengambil berapapun ikan (minimal 1) HANYA dari satu tumpukan yang sama. Bebek yang memakan ikan terakhir memenangkan permainan.\n\nPernyataan: "Jika Kwak mendapat giliran pertama dan diasumsikan kedua bebek bermain dengan strategi super rasional dan optimal, Kwak PASTI memiliki 'Winning Strategy' untuk memenangkan permainan ini terlepas dari perlawanan Kwik."`,
    correctAnswer: "BENAR",
    explanation: "Menurut Teorema Bouton, permainan NIM dimenangkan oleh pemain pertama jika nilai XOR-Sum (Nim-Sum) dari kondisi awal tidak sama dengan 0. Mari kita kalkulasi: 3 XOR 5 XOR 7 dalam biner = (011) XOR (101) XOR (111). Pertama, 3 XOR 5 = 110 (atau 6). Kedua, 6 XOR 7 = (110) XOR (111) = 001 (atau 1). Karena hasil Nim-Sum = 1 (yang berarti != 0), maka pemain pertama (Kwak) berada di Winning State dan pasti menang dengan bermain optimal."
  },
  {
    id: 9,
    type: 'isian',
    question: `Pak Dengklek memiliki mesin penetas telur raksasa. Mesin tersebut memiliki dua wadah pemanas. Wadah pertama menetas tepat 3^2025 butir telur, sedangkan wadah kedua menetas 5^2025 butir telur. \n\nSetelah semua telur menetas, Pak Dengklek ingin memasukkan anak-anak bebek tersebut ke dalam kotak-kotak kecil yang masing-masing berkapasitas 8 ekor. Pak Dengklek khawatir akan ada anak bebek sisa yang kedinginan di luar kotak. \nTentukan berapakah jumlah anak bebek yang akan tersisa (modulo) di luar kotak-kotak tersebut!`,
    correctAnswer: "0",
    explanation: "Gunakan sifat modular aritmetika dasar. Kita cari (3^2025 + 5^2025) mod 8.\nSuku pertama: 3^2 = 9 ≡ 1 (mod 8). Maka 3^2025 = 3 * (3^2)^1012 ≡ 3 * (1)^1012 ≡ 3 (mod 8).\nSuku kedua: 5 ≡ -3 (mod 8). Maka 5^2025 ≡ (-3)^2025 ≡ -(3^2025) (mod 8). Dari perhitungan sebelumnya, 3^2025 ≡ 3 (mod 8). Maka -(3^2025) ≡ -3 ≡ 5 (mod 8).\nJumlahkan sisa keduanya: 3 + 5 = 8 ≡ 0 (mod 8). Tidak akan ada anak bebek yang tersisa."
  },
  {
    id: 10,
    type: 'pg',
    question: `Setiap pagi, Kwek harus berjalan dari kandangnya menuju kolam pancing. Dilihat dari citra satelit, peta ladang Pak Dengklek membentuk grid Kartesius raksasa. Kandang Kwek berada di koordinat (0, 0) (diwakili simbol @) dan kolam pancing berada di (5, 5) (diwakili simbol *). \n\nKwek hanya bisa berjalan ke arah Kanan (+1 sumbu X) atau ke Atas (+1 sumbu Y). Namun nahas, terdapat tumpukan pupuk kandang raksasa di koordinat (2, 2) (diwakili simbol X) yang aromanya sangat menyengat, sehingga Kwek mutlak TIDAK BOLEH melewati titik tersebut.\n\nBerapa banyak kemungkinan rute terpendek berbeda yang bisa diambil Kwek?`,
    visualType: 'ascii',
    visualCode: `
Y
5 . . . . . *
4 . . . . . .
3 . . . . . .
2 . . X . . .
1 . . . . . .
0 @ . . . . .
  0 1 2 3 4 5 X
    `,
    options: [
      "A. 252",
      "B. 126",
      "C. 32",
      "D. 132",
      "E. 188"
    ],
    correctAnswer: "D",
    explanation: "Total rute kombinatorika tanpa batasan dari (0,0) ke (5,5) adalah C(10,5) = 252 (karena butuh 5 langkah Kanan dan 5 Atas, total 10 langkah). Kita akan mengurangi total rute ini dengan rute-rute ilegal (yang melalui tumpukan pupuk). Rute melalui (2,2) adalah kombinasi rute dari (0,0) ke (2,2) dikalikan rute (2,2) ke (5,5).\nRute (0,0)->(2,2) = C(4,2) = 6.\nRute (2,2)->(5,5) setara dengan rute berukuran 3x3, yaitu C(6,3) = 20.\nTotal rute dilarang = 6 * 20 = 120.\nMaka, total rute yang aman dilewati Kwek adalah 252 - 120 = 132 rute."
  },

  // --- BAGIAN B: STRUKTUR DATA, GRAF, DAN ALGORITMIKA ---
  // KELOMPOK SOAL: MANAJEMEN GUDANG BEBEK (Soal 11, 12, 15)
  {
    id: 11,
    type: 'pg',
    question: `Deskripsi berikut digunakan untuk menjawab soal nomor 11, 12, dan 13.\n\nPak Dengklek sedang menata ulang manajemen struktural gudang besarnya. Di lorong pertama, ia menggunakan struktur 'Array 1 Dimensi' konvensional untuk menyimpan karung-karung pakan bebek. Suatu hari, Kwok datang dan memberikan instruksi kilat mengenai operasi yang harus dilakukan pada barisan karung tersebut.\n\nManakah dari instruksi kombinasi operasi berikut yang paling efisien, dalam artian menjamin kompleksitas waktu O(1) (konstan) pada struktur array konvensional tanpa manipulasi tambahan?`,
    options: [
      "A. Menambahkan karung baru di ujung akhir barisan dan menimbang mencari karung terberat (maksimum)",
      "B. Mengambil sampel karung pada indeks ke-i dan menyisipkan karung baru di awal barisan",
      "C. Mengecek label karung pada indeks ke-i dan mengganti (update) karung pada indeks ke-i dengan yang baru",
      "D. Menarik karung dari tengah barisan (hapus) dan memperbarui label karung pada indeks ke-i",
      "E. Mencari karung dengan merek tertentu secara berurutan dan menarik karung dari akhir barisan"
    ],
    correctAnswer: "C",
    explanation: "Struktur data Array memiliki sifat 'Random Access Memory' secara linear (contiguous memory allocation). Ini berarti, mengakses (membaca) elemen array[i] dan menimpanya (update) array[i] = X dilakukan dalam waktu instan O(1) karena kalkulasi alamat pointer memori berlangsung konstan. Operasi menambah di awal, menghapus di tengah, atau mencari elemen (linear search) mengharuskan array melakukan pergeseran (shifting) atau traversal, yang membutuhkan waktu linear O(N)."
  },
  {
    id: 12,
    type: 'isian',
    question: `(Lanjutan Cerita Gudang Bebek)\nDi lorong kedua gudang, Pak Dengklek memiliki lima kotak pesanan yang ditumpuk mendatar dengan berat masing-masing: [5, 1, 4, 2, 8] kilogram. Ia memanggil robot penyortirnya yang diprogram menggunakan algoritma pengurutan (sorting) yang bekerja dengan membandingkan dua kotak bersebelahan dan menukarnya jika urutannya salah, berulang kali hingga kotak terberat 'menggelembung' ke ujung kanan pada setiap fasenya.\n\nBerapa total operasi penukaran (swap) kotak fisik yang akan dilakukan robot tersebut hingga seluruh pesanan berbaris rapi secara menaik (ascending)?`,
    correctAnswer: "4",
    explanation: "Robot tersebut menjalankan algoritma 'Bubble Sort'. Jumlah total penukaran (swap) dalam algoritma Bubble Sort selalu identik dengan jumlah pasangan 'inversi' (inversion) di dalam susunan awalnya. Inversi terjadi ketika i < j tetapi A[i] > A[j]. Pada array [5,1,4,2,8], pasangan inversinya adalah: (5,1), (5,4), (5,2), dan (4,2). Ada tepat 4 inversi matematis. Maka robot akan melakukan tepat 4 kali penukaran kotak."
  },
  {
    id: 13,
    type: 'isian',
    question: `(Lanjutan Cerita Gudang Bebek)\nDi lorong terdalam gudang, Pak Dengklek memetakan silsilah sisa panennya menggunakan struktur 'Binary Search Tree' (BST). Jika Pak Dengklek memasukkan data sejumlah N buah simpul panen ke dalam BST tersebut, dan sayangnya data tersebut didatangkan dalam keadaan sudah terurut dari supplier, apa yang terjadi pada pohon tersebut?\n\nSecara asimtotik terburuk (worst-case scenario), berapakah kedalaman maksimum (maximum depth/height) dari silsilah BST Pak Dengklek tersebut? (Asumsikan root level pertama bernilai kedalaman 1, jawab dengan variabel tunggal aljabar).`,
    correctAnswer: "N",
    explanation: "Pada algoritma penyisipan Binary Search Tree standar (tanpa penyeimbang seperti AVL atau Red-Black Tree), memasukkan serangkaian data yang sudah terurut (misal: 1, 2, 3, 4 ... N) akan membuat simpul terus-menerus disisipkan sebagai anak kanan (right child). Pohon akan terdegradasi menjadi struktur linier satu dimensi menyerupai Linked List. Kedalaman maksimum (height) pada skenario terburuk ini akan setara dengan jumlah total elemen, yaitu N."
  },
  {
    id: 14,
    type: 'bs',
    question: `Pak Dengklek dan Kwak sedang bersiap memuat kereta panen. Mereka berdebat tentang cara memaksimalkan keuntungan dari memuat buah semangka bulat utuh ke dalam keranjang dengan kapasitas beban terbatas. Kwak menyarankan penggunaan Algoritma Greedy dengan selalu memprioritaskan semangka yang memiliki rasio (Harga/Berat) terbesar ke dalam keranjang.\n\nPernyataan: "Metode Heuristik Greedy yang disarankan Kwak ini SELALU dijamin secara matematis akan menemukan solusi penyusunan paling optimal (keuntungan global maksimum) pada kasus Ransel Semangka Utuh (0/1 Knapsack Problem) ini."`,
    correctAnswer: "SALAH",
    explanation: "Pada 0/1 Knapsack Problem, barang tidak dapat dipecah secara fraksional (semangka tidak bisa dipotong sebagian untuk memenuhi sisa kapasitas keranjang). Mengambil barang dengan rasio Harga/Berat terbesar bisa menyisakan ruang kosong besar di keranjang yang menyebabkan total keuntungan menjadi sub-optimal. Permasalahan ini secara inheren bersifat NP-Hard dan menuntut algoritma Dynamic Programming untuk menjamin penemuan nilai optimal mutlak."
  },
  {
    id: 15,
    type: 'pg',
    question: `Bebek Kwek ditugaskan mencari rute pengiriman telur terpendek dari Markas (Simpul A) menuju Pasar Induk (Simpul Z). Peta relasi antarkota digambarkan sebagai graf berbobot (weighted graph). Karena adanya subsidi bahan bakar oleh wali kota di beberapa rute antar-provinsi, melintasi rute tersebut justru akan menambah saldo uang Kwek (direpresentasikan sebagai bobot sisi negatif).\n\nAlgoritma penjelajahan graf manakah yang PALING TEPAT diprogram ke dalam GPS Kwek agar rute terpendek dan termurah ditemukan secara akurat tanpa terjebak *infinite loop*? (Asumsikan tidak terdapat siklus tertutup berbobot total negatif di peta tersebut).`,
    visualType: 'mermaid',
    visualCode: `
      graph LR
        A((A)) -- 5 --> B((B))
        B -- -3 --> C((C))
        C -- 2 --> Z((Z))
        A -- 3 --> C
    `,
    options: [
      "A. Algoritma Dijkstra",
      "B. Algoritma Kruskal",
      "C. Algoritma Bellman-Ford",
      "D. Algoritma Depth-First Search (DFS)",
      "E. Algoritma Jarník-Prim"
    ],
    correctAnswer: "C",
    explanation: "Algoritma Dijkstra beroperasi dengan asumsi bahwa semua sisi graf bernilai positif; adanya bobot negatif akan merusak fungsi 'relaksasi' Greedy-nya dan menghasilkan jarak yang fatal kelirunya. Kruskal dan Prim ditugaskan untuk Minimum Spanning Tree, bukan Shortest Path. Algoritma Bellman-Ford dirancang secara khusus untuk mendeteksi relaksasi bertahap pada shortest path problem yang memuat bobot negatif (negative weights), serta mampu mendeteksi keberadaan negative weight cycles."
  },

  // --- BAGIAN C: PEMAHAMAN DAN TRACING KODE C++ ---
  // KELOMPOK SOAL: KODE RAHASIA BEBEK (Soal 16, 17, 18)
  {
    id: 16,
    type: 'pg',
    question: `Deskripsi dan barisan kode C++ berikut digunakan untuk menjawab soal nomor 16, 17, dan 18.\n\nDi malam yang hening, Kwik, bebek yang sangat menggilai ilmu komputer arsitektur memori, diam-diam menyelinap ke komputer induk Pak Dengklek dan menuliskan simulasi manipulasi memori pelacakan koordinat sebagai berikut:\n\nint x = 5;\nint* y = &x;\nint& z = x;\n\n*y = 10;\nz = 20;\n\nSetelah sekering kompilasi dijalankan, Kwik bertaruh dengan Kwak mengenai keadaan memori mesin. Manakah pernyataan yang paling akurat merepresentasikan state akhir dari variabel-variabel tersebut?`,
    options: [
      "A. x bernilai 5, y menunjuk 10, z bernilai 20",
      "B. x bernilai 10, y menunjuk 20, z bernilai 20",
      "C. x bernilai 20, *y bernilai 20, z bernilai 20",
      "D. Program akan mengalami *Segmentation Fault* pada baris 'int& z = x;'",
      "E. *y bernilai 10, x bernilai 20, z bernilai 5"
    ],
    correctAnswer: "C",
    explanation: "Mari kita evaluasi relasi alokasi memori. 'x' adalah sebuah variabel primitif. 'y' adalah pointer yang mereferensikan alamat memori dari 'x'. 'z' adalah reference variabel (alias statis) yang mengikat langsung ke 'x'. Saat dereferencing '*y = 10' dieksekusi, nilai di dalam memori 'x' diubah paksa menjadi 10. Selanjutnya saat operasi assignment 'z = 20' dipanggil, karena 'z' hanyalah nama lain dari 'x', memori 'x' kembali ditimpa menjadi 20. Hasil akhirnya: ketiganya (x, *y, z) menunjuk pada balok memori fisik yang persis sama, yang kini berisi nilai 20."
  },
  {
    id: 17,
    type: 'isian',
    question: `(Lanjutan Cerita Kode Kwik)\nDi modul program sebelahnya, Kwik menyusupkan sebuah fungsi matematika rekursif misterius untuk menghitung jatah harian karung pakannya. Potongan fungsi C++ tersebut ditulis sebagai berikut:\n\nint misteri(int a, int b) {\n    if (b == 0) return 0;\n    if (b % 2 == 0) return misteri(a + a, b / 2);\n    return misteri(a + a, b / 2) + a;\n}\n\nPak Dengklek secara tidak sengaja memanggil fungsi tersebut melalui terminal console-nya dengan memberikan argumen: cout << misteri(7, 10);\nAngka berapakah yang akan terpampang di layar LCD mesin pencacah pakan tersebut?`,
    correctAnswer: "70",
    explanation: "Fungsi rekursif ini merupakan implementasi cemerlang dari trik algoritma kuno 'Russian Peasant Multiplication', yang secara asimtotik mengalikan dua bilangan (a dikali b) melalui pergeseran biner (binary shifting). Pada setiap lapisannya, fungsi menggandakan nilai 'a' dan membelah dua nilai 'b' (floor division). Jika di langkah tersebut 'b' adalah bilangan ganjil, nilai 'a' aslinya akan diakumulasikan ke stack return. Alhasil, pemanggilan misteri(7, 10) semata-mata adalah instruksi matematis untuk mengevaluasi 7 * 10. Jawabannya adalah 70."
  },
  {
    id: 18,
    type: 'bs',
    question: `(Lanjutan Cerita Kode Kwik)\nSebagai puncak keusilannya, Kwik menulis sebuah program pendek untuk menukar dua label harga pakan premium menggunakan manipulasi bitwise XOR yang sangat ia banggakan:\n\nvoid tukar(int a, int b) {\n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n}\nint main() {\n    int x = 10, y = 5;\n    tukar(x, y);\n    cout << x << " " << y;\n}\n\nKwik sesumbar di depan Kwak: "Mesin ini pasti akan mencetak output '5 10' ke layar, karena aku telah menghemat penggunaan RAM tanpa memerlukan variabel temp tambahan!"\n\nApakah klaim Kwik tersebut BENAR atau SALAH?`,
    correctAnswer: "SALAH",
    explanation: "Meskipun inti logika matematika manipulasi bitwise XOR swap yang dirangkai Kwik di dalam blok `tukar` beroperasi dengan sempurna, Kwik jatuh ke dalam jebakan paradigma pemrograman C/C++. Argumen 'a' dan 'b' dilempar secara *Pass by Value*, bukan *Pass by Reference* (seharusnya int& a, int& b). Oleh karena itu, semua orkestrasi penukaran XOR tersebut hanya mengotak-atik variabel salinan (copy) lokal di dalam scope tumpukan (stack) fungsi `tukar` saja, dan sama sekali tidak mendistorsi nilai dari 'x' dan 'y' di ruang lingkup `main()`. Konsol akan tetap mencetak nilai asalnya: '10 5'."
  },
  {
    id: 19,
    type: 'pg',
    question: `Pak Dengklek baru saja merakit sebuah mesin penyortir telur mekanik raksasa. Mesin ini digerakkan oleh keping mikrokontroler yang menjalankan sebaris algoritma bersarang (nested loop) perulangan deterministik:\n\nfor(int i = 1; i <= N; i++) {\n    for(int j = 1; j <= N; j += i) {\n        cout << i + j;\n    }\n}\n\nKwak, sang analis performa, ditugaskan memprediksi seberapa cepat mesin akan kelelahan (burn-out) jika jumlah telur N diperbesar hingga jutaan butir. \nBerdasarkan Notasi Asimtotik Big-O (Big-O notation), berapakah kelas kompleksitas waktu terburuk (worst-case time complexity) yang membatasi algoritma mesin Pak Dengklek tersebut?`,
    options: [
      "A. O(N)",
      "B. O(N log N)",
      "C. O(N^2)",
      "D. O(N^2 log N)",
      "E. O(2^N)"
    ],
    correctAnswer: "B",
    explanation: "Loop luar akan berotasi tetap sebanyak N iterasi (i berjalan dari 1 hingga N). Mekanika kuncinya terletak pada loop dalam, yang tidak bergeser satu per satu, melainkan melompat-lompat dengan besaran loncatan (step) sebesar 'i'. Pada iterasi luar i=1, loop dalam berputar N/1 kali. Saat i=2, ia berputar N/2 kali, lalu N/3, N/4, dan seterusnya. Jika kita jumlahkan total komputasi instruksi inti (Sigma N/i): Total Langkah = N * (1/1 + 1/2 + 1/3 + ... + 1/N). Deret di dalam kurung tersebut merupakan Deret Harmonik (Harmonic Series) terkenal, yang secara matematis laju pertumbuhannya konvergen menyerupai fungsi Logaritma Natural (ln N). Dengan demikian, batas pertumbuhan kompleksitas asimtotiknya secara padat dihimpit pada kelas O(N log N)."
  },
  {
    id: 20,
    type: 'isian',
    question: `Di dinding kandang utama, Kwek mencoretkan sebuah manuskrip fungsi rekursif yang ia peroleh dari dewa bebek masa lalu. Fungsi ini menghitung variasi energi lintasan grid semesta paralel:\n\nint f(int x, int y) {\n    if (x == 0) return y;\n    if (y == 0) return x;\n    return f(x - 1, y) + f(x, y - 1);\n}\n\nKwek kemudian memaksa Pak Dengklek mengeksekusi bayangan fungsi tersebut dengan mantra pemanggilan 'f(5, 3)'. Berapakah angka resonansi yang akan memancar (return value) dari eksekusi fungsi sakral tersebut?`,
    correctAnswer: "98",
    explanation: "Fungsi rekursif `f(x,y)` yang diciptakan Kwek meniru pola pembentukan segitiga Pascal dua dimensi, namun diinfeksi oleh 'base case' yang eksentrik: batas dasar tidak mengembalikan nilai 1, melainkan f(x,0) = x dan f(0,y) = y. \nApabila ditelusuri menggunakan tabel Dynamic Programming bottom-up (membuat grid perpotongan sumbu):\nBaris dasar Y=0: [0, 1, 2, 3, 4, 5]\nKolom dasar X=0: vertikal ke atas [0, 1, 2, 3]\nLapisan Y=1: f(1,1)=1+1=2. f(2,1)=2+2=4. f(3,1)=4+3=7. f(4,1)=7+4=11. f(5,1)=11+5=16.\nLapisan Y=2: f(1,2)=2+2=4. f(2,2)=4+4=8. f(3,2)=8+7=15. f(4,2)=15+11=26. f(5,2)=26+16=42.\nLapisan Y=3 (Final): f(1,3)=3+4=7. f(2,3)=7+8=15. f(3,3)=15+15=30. f(4,3)=30+26=56. f(5,3)=56+42=98. Lontaran akhirnya adalah 98."
  },
  
  // --- BAGIAN LANJUTAN: KOMBINASI ABSTRAKSI & STRUKTUR DATA OSN ---
  {
    id: 21,
    type: 'pg',
    question: `Kwak memantau hasil produksi panen telur ayam pelung harian di peternakan selama 5 hari pertama minggu ini. Data produksinya direkam ke dalam struktur memori array A: [3, 7, 1, 8, 4] butir.\nUntuk mempercepat kalkulasi pelaporan pajak bulanan walikota, Kwak memetakan array A menjadi struktur Array 'Prefix Sum' berlabel P. Aturan pembentukannya ketat: P[0] = 0, dan setiap indeks selanjutnya P[i] = P[i-1] + A[i-1] (untuk rentang 1 <= i <= 5).\n\nSuatu hari, auditor peternakan meminta Kwak mengeksekusi perhitungan aljabar: P[5] - P[2].\nSecara arsitektur struktur data, operasi ini akan mereduksi evaluasi nilai yang ekuivalen dengan jumlahan blok mana pada array sumber A?`,
    options: [
      "A. A[5] - A[2]",
      "B. A[2] + A[3] + A[4]",
      "C. A[3] + A[4] + A[5]",
      "D. A[1] + A[2] + A[3] + A[4]",
      "E. A[2] - A[5]"
    ],
    correctAnswer: "B",
    explanation: "Array Prefix Sum (P) direkayasa untuk menyelesaikan permasalahan komputasi *Range Sum Query* (Penjumlahan Sub-Interval) secara instan dalam O(1). Secara formula matematis, jumlahan elemen-elemen berurutan pada array sumber A mulai dari indeks bawah L hingga indeks atas R (dengan sistem 0-indexed) dihitung dengan ekspresi P[R+1] - P[L].\nDalam narasi di atas, ekspansi nilai P[5] = A[0]+A[1]+A[2]+A[3]+A[4]. Di sisi lain, P[2] menampung A[0]+A[1]. Saat terjadi operasi selisih (P[5] - P[2]), blok A[0] dan A[1] akan saling meniadakan (cancel out). Sisa ekspresi yang bertahan utuh di memori murni adalah (A[2] + A[3] + A[4])."
  },
  {
    id: 22,
    type: 'bs',
    question: `Kwek sedang memimpin proyek rahasia pembuatan kecerdasan buatan penelusur labirin sawah otomatis (Automated Maze Runner AI). Di papan tulis diskusi, Kwek dengan percaya diri menulis teori fondasi arsitekturnya:\n\n"Dalam kancah Pemrograman Kompetitif (Competitive Programming), penelusuran graf menggunakan metode DFS (Depth-First Search) yang membongkar node sedalam mungkin sebelum berbalik arah, secara organik dan baku dieksekusi dengan mendayagunakan antrean mesin struktur data Queue apabila diimplementasikan secara iteratif!"\n\nApakah deklarasi teori arsitektur graf milik Kwek tersebut sah BENAR atau menyesatkan (SALAH)?`,
    correctAnswer: "SALAH",
    explanation: "Pernyataan Kwek keliru secara konseptual struktur data dasar. Algoritma DFS (Depth-First Search) mengutamakan penjelajahan cabang hingga menyentuh titik jalan buntu (dead-end) terdalam sebelum melakukan *backtracking*. Perilaku mundur-dan-lanjutkan ini menuntut mekanisme LIFO (Last-In-First-Out), sehingga apabila diimplementasikan menggunakan paradigma iteratif (tanpa membebani Stack Call rekursi OS), struktur data penampung memori yang wajib digunakan adalah STACK (Tumpukan). Sementara itu, struktur data Queue (Antrean/FIFO) adalah tulang punggung mekanika BFS (Breadth-First Search) yang menguliti graf lapis demi lapis (level-order traversal)."
  },
  {
    id: 23,
    type: 'isian',
    question: `Bebek Kwik, sang insinyur elektro peternakan, memprogram sebuah rangkaian sakelar elektronik digital. Kwik menyuntikkan 45 tegangan ke dalam chip memori dan memerintahkannya menjalankan subrutin C++ mikrokontroler di bawah ini:\n\nint sakelar = 45;\nint nyala = 0;\nwhile (sakelar > 0) {\n    if (sakelar % 2 == 1) nyala++;\n    sakelar = sakelar / 2;\n}\ncout << nyala;\n\nBerapa banyak lampu diorama peternakan (angka output) yang akan bersinar terang setelah rangkaian loop tersebut mengalami terminasi?`,
    correctAnswer: "4",
    explanation: "Potongan loop C++ yang disuntikkan Kwik secara esensial adalah algoritma konversi desimal-ke-biner manual yang ditugaskan murni untuk menghitung populasi set-bits (jumlah angka '1') pada representasi bit string dari nilai variabel 'sakelar'. \nMari kita dekomposisi angka desimal 45 ke dalam basis biner (Base-2): \n45 = 32 + 8 + 4 + 1 = (2^5) + (2^3) + (2^2) + (2^0).\nPemetaan deret binernya terbentuk menjumpai: 101101_2. Pada pita biner 6-bit tersebut, terdapat presisi 4 posisi bit yang teraktivasi (bernilai 1). Karena itu, pencacah variabel 'nyala' akan mengalami inkrementasi tepat 4 kali sebelum variabel sakelar kolaps menjadi nol. Output akhirnya adalah 4."
  },
  {
    id: 24,
    type: 'pg',
    question: `Dalam rangka perayaan panen emas agrikultur, Pak Dengklek berinisiatif memasang sistem estetika 15 tiang lampu sorot benderang di jalan setapak utama desanya. Demi kehematan utilitas tembaga kawat, ia merajut instalasi tersebut dengan memaksakan arsitektur topologi graf agar ke-15 lampu tersebut membentuk satu kesatuan Pohon Spanning Hutan (Spanning Tree) sempurna tanpa jalur listrik ganda (tanpa cycle).\n\nNamun, petir menyambar di malam hari dan memutus putus asa 2 lintasan kabel secara acak di tengah-tengah rentang. Mengalami insiden fraksional graf ini, topologi instalasi lampu Pak Dengklek kini telah terbelah menjadi berapa banyak komponen terhubung fragmen (forest) yang saling terisolasi?`,
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 13",
      "E. 15"
    ],
    correctAnswer: "C",
    explanation: "Karakteristik inheren dari struktur graf Pohon (Tree) yang tidak memiliki arah menjamin bahwa untuk menghubungkan N buah simpul menjadi satu entitas terhubung penuh bebas siklus, akan senantiasa digunakan tepat (N - 1) sisi rute. Sebelum insiden petir, instalasi Pak Dengklek adalah 1 Pohon utuh (1 komponen terhubung). Memutus atau membuang 1 rute (edge) acak dari kerangka sebuah Tree tidak terhindarkan akan membelah entitas struktur kelemahan tersebut menjadi tepat 2 komponen sub-graf yang saling otonom. Melanjutkan pemotongan di fragmen mana pun dengan memutuskan kabel (edge) ke-2, akan memisahkan salah satu sub-grafnya lagi menjadi dua. Formulasi aritmetikanya: Total Komponen Akhir = Komponen Awal + Jumlah Sisi Terpotong = 1 + 2 = 3 hutan komponen terhubung (disconnected forest fragments)."
  },
  {
    id: 25,
    type: 'isian',
    question: `Kwak secara misterius menemukan gulungan diagram alir penyandian nuklir warisan profesor tua Algoria. Gulungan tersebut berisikan rumusan paradoks rekayasa balik:\n\nint g(int n) {\n    if (n > 100) return n - 10;\n    return g(g(n + 11));\n}\n\nTermotivasi memecahkan perisai enkripsinya, Kwak mengetikkan pemanggilan perdana ke dalam konsol sentral dengan kueri eksekusi: 'g(100)'.\nAngka kunci akses akhir (return value evaluasi) berapakah yang akan ditembakkan keluar dari kedalaman perulangan rantai paradoks fungsi 'g' tersebut?`,
    correctAnswer: "91",
    explanation: "Algoritma pemanggilan bertumpuk mengerikan yang diamati Kwak ini secara historis tersohor di ranah akademik Computer Science sebagai Fungsi McCarthy 91 (McCarthy 91 Function). Paradoks logika fungsi ini telah direkayasa sedemikian rupanya sehingga untuk semua argumen input 'n' yang bernilai kurang dari atau sama dengan 100, jaring rekursi berantai ini akan mereduksi state dan pada akhirnya beresonansi melontarkan nilai konstan abadi yakni angka 91.\nBila kita evaluasi jejak call stack eksekusinya: g(100) -> meleset ke fallback clause -> memanggil g(g(100 + 11)) = g(g(111)). Karena 111 melebihi 100, fungsi g(111) langsung mereturn (111 - 10) = 101. Lapis substitusinya sekarang memanggil g(101). Angka 101 melampaui 100, sehingga dipotong menjadi (101 - 10) yang akhirnya meruntuhkan stack mengembalikan nilai paripurna 91."
  },
  {
    id: 26,
    type: 'pg',
    question: `Untuk menghadapi inspektur pertanian dinas yang rewel, Pak Dengklek menyembunyikan laporan persis berapa sisa jumlah cadangan telur bebek emasnya. Ia hanya menorehkan dua teka-teki kongruensi sisa pembagian ke atas lembar daun pisang:\n"Jika engkau kelompokkan telur-telur tersebut dengan berjajar barisan 3, maka akan selalu tersisa 2 butir yang tak kebagian tempat. Namun, bila direntang dengan berjajar formasi barisan 5, akan terus ada sisa lengang 3 butir tak berpasangan."\n\nMengaplikasikan ilmu kuno Teorema Sisa Tiongkok (Chinese Remainder Theorem) yang dipelajarinya, Kwek berusaha mendudukkan teka-teki majikannya.\nBerapakah nilai minimum (kuantitas bulat terkecil yang valid secara positif) jumlah cadangan telur emas Pak Dengklek yang sukses menjawab formasi paradoks kongruensi tersebut?`,
    options: [
      "A. 5",
      "B. 8",
      "C. 11",
      "D. 13",
      "E. 17"
    ],
    correctAnswer: "B",
    explanation: "Beban matematika ini menuntut penyelesaian teka-teki sistem linear kongruensi variabel majemuk: Tentukan x sedemikian rupa sehingga x ≡ 2 (mod 3) bersandingan setara x ≡ 3 (mod 5). \nPendekatan pencarian sistematis paling gesit adalah menjabarkan deret aritmetika syarat kedua (karena modulo pembaginya lebih membatasi). Himpunan kandidat bilangan bulat positif yang memenuhi x ≡ 3 (mod 5) adalah deret loncatan: 3, 8, 13, 18, 23... \nSelanjutnya, kita hantam nilai kandidat-kandidat perintis tersebut dan kita saring dengan pisau modulo syarat pertama (yakni sisa 2 jika dibagi 3).\n- Ambil 3: 3 mod 3 = 0 (Salah)\n- Ambil 8: 8 mod 3 = 2 (Valid!)\nAngka irisan valid pertama yang meledakkan tabir kunci teka-teki ini adalah 8. Jadi, stok minimum telur emas yang dikandung Pak Dengklek menyisakan nilai kuantitas 8."
  },
  {
    id: 27,
    type: 'bs',
    question: `Bebek Kwik, yang sombong sebagai insinyur pengembang kernel kompilator, mengutarakan pedoman ekstrim perihal pemrosesan rentetan kata (string) di hadapan peternakan: \n"Bila engkau berniat mengambil karakter acak di tengah-tengah kalimat C++ menggunakan notasi akses *array indexing* seperti 'Kalimat[15]', proses internal arsitektur memori ini mutlak akan bergulir lebih lambat dari sekadar memotongnya menggunakan perintah manipulasi 'Kalimat.substr(15,1)'! Ini disebabkan operator tanda kurung siku terhambat meniti alokasi string huruf demi huruf bak gerbong kereta!"\n\nApakah indoktrinasi optimisasi memori ekstrim milik Kwik di atas absah BENAR atau cacat teori (SALAH)?`,
    correctAnswer: "SALAH",
    explanation: "Indoktrinasi asumsi mesin Kwik ini sangat sesat dan fatal. Di balik selubung perpustakaan standar C++ modern, struktur kelas `std::string` tidak didefinisikan sebagai rantai penunjuk gerbong yang tercerai-berai (Linked List), melainkan terhimpun erat layaknya balok penyimpan contiguous memory array satu dimensi murni. Desain kontigu ini membekali `std::string` dengan superioritas jaminan waktu eksekusi 'Random Access' yang konstan O(1) untuk menembak lokasi indeks S[i] tanpa beban iterasi pencarian. \nDi kutub seberang, pemanggilan seruan pembedahan fungsi `substr` menginisialisasi protokol berat: ia mendesak kernel pengoperasi (OS) membebaskan sepetak alokasi ranah objek memori anyar, kemudian menyalin pautan bit karakter, sebuah overhead komputasional yang merangkak selambat O(K), berproporsi langsung dengan kelebaran lintasan sayatan substring yang dikehendaki."
  },
  {
    id: 28,
    type: 'isian',
    question: `Sebuah wabah penyakit kebingungan gosip aneh merajalela di antara kawanan bebek. Empat bebek vokal (dinomori 1, 2, 3, dan 4) secara obsesif saling membocorkan rumor konyol. Pak Dengklek, menaruh curiga, memetakan jaringan penularan rahasia ini sebagai graf rantai informasi berarah (Directed Graph).\nPeta intelijen Pak Dengklek mengungkap siklus infeksi ini: Bebek 1 menyebarkan isu kepada Bebek 2 (1->2). Bebek 2 lantas meneruskannya kepada Bebek 3 (2->3). Bebek 3 lanjut ke Bebek 4 (3->4). Dan celakanya, Bebek 4 membocorkannya kembali berputar utuh ke telinga Bebek 1 (4->1).\n\nBertumpu pada konfigurasi perputaran graf makar bebek yang terkunci tertutup ini, berapakah jumlah kalkulasi kumulatif dari nilai derajat kerentanan pendengaran masuk (In-Degree) dijumlahkan dengan derajat kebocoran mulut keluar (Out-Degree) yang difokuskan secara khusus untuk menyasar pusat subjek Bebek Nomor 2 semata?`,
    visualType: 'mermaid',
    visualCode: `
      graph TD
        1((Bebek 1)) --> 2((Bebek 2))
        2 --> 3((Bebek 3))
        3 --> 4((Bebek 4))
        4 --> 1
    `,
    correctAnswer: "2",
    explanation: "Konfigurasi transmisi jaringan intrik rumor yang digambarkan Pak Dengklek membentuk skema graf lintasan siklus memutar sempurna (Directed Cycle Graph C_4). Mari kita bedah isolasi arsitektur derajat insidensi khusus menyasar simpul Simpul 2 (Bebek 2):\nSimpul 2 diinfiltrasi dengan menerima satu serangan tunggal garis panah ujung (edge masuk) yang dipancarkan sepihak dari Simpul 1. (Maka nilai In-degree (derajat masuk) = 1).\nSimpul 2 bertindak selaku operator yang menembakkan/memancarkan satu jalur kawat (edge keluar) menerjang ke arah kubu Simpul 3. (Maka nilai Out-degree (derajat keluar) = 1).\nOperasi gabungan penjumlahan (In-Degree + Out-Degree) untuk kubu Bebek Nomor 2 dieksekusi menjadi = 1 + 1 = 2."
  },
  {
    id: 29,
    type: 'pg',
    question: `Kwek, bebek penganut klenik kode kuno, berupaya menyedot aura magis dengan mencetak serangkaian mantera perulangan bitwise murni ke dalam log rahasianya. Mantera aneh berbungkus bahasa mesin ini dititah memanipulasi rentang variabel n cacah mutlak dari kuadran awal 1 hingga batas atas 5:\n\nint hasil_mantera = 0;\nfor(int i = 1; i <= 5; i++) hasil_mantera = hasil_mantera ^ i;\n\nTerpana menatapi kursor monitor berkedip, Kwek tak sabar mencatat presisi angka akhir yang terlahir. Berapakah esensi nilai akhir yang tertancap pekat di dalam tubuh variabel 'hasil_mantera' setelah badai pusaran perulangan operator penyingkir eksklusif (XOR/^) ini mereda total?`,
    options: [
      "A. 1",
      "B. 3",
      "C. 5",
      "D. 7",
      "E. 15"
    ],
    correctAnswer: "A",
    explanation: "Mantra Kwek pada hakikatnya membebankan penumpukan operasi XOR beruntun merangkum baris himpunan [1, 2, 3, 4, 5]. Kita telusuri evolusi jejak variabel pencatat:\n- Iterasi i = 1: hasil = 000 ^ 001 = 001 (1).\n- Iterasi i = 2: hasil = 001 ^ 010 = 011 (3).\n- Iterasi i = 3: hasil = 011 ^ 011 = 000 (0).\n- Iterasi i = 4: hasil = 000 ^ 100 = 100 (4).\n- Puncak Iterasi Final i = 5: hasil = 100 ^ 101. Bila disejajarkan per bit biner, bit '4' teranulir/mati beradu (1^1 = 0), membebaskan kepingan bit '1' yang mendominasi akhir. 100 ^ 101 = 001 (1).\nBadai eksekusi XOR biner Kwek reda tenang melontarkan nilai hasil genap berupa 1."
  },
  {
    id: 30,
    type: 'isian',
    question: `Musim panen kandang ekspansi raksasa peternakan membawa pusing berkepanjangan bagi Pak Dengklek. Mengingat kawanan bebek terus membelah beranak pinak pesat di area teritorial yang tumpang tindih, ia mendesain baris rumusan kontrol rantai sisa (Modulo) eksentrik berlapis ke dalam kertas kerjanya. Formula pelik peredam ekspansi populasinya disusun menjebak berlapis berputar:\n\nFormula Keutuhan: (( ( (2025 % 7) * 3 ) % 7) + 10) % 7\n\nSetelah mencoret-coret sisa tanah lumpur untuk memangkas kalkulasi yang terkesan rumit menakutkan itu ke dalam simplifikasi fraksional terkecilnya, angka kontrol keselamatan terakhir berapakah (hasil perampingan numerik dari formula) yang bakal terbit menenangkan kekalutan Pak Dengklek?`,
    correctAnswer: "2",
    explanation: "Mari kita reduksi blok perisai inkapsulasi dalam-ke-luar meruntuhkan tabir rantai operasi aritmetika:\n- Blok Nukleus 1: Evaluasi batas sisa 2025 disayat 7. Rentang galian perkalian 2025 = 7 * 289 membuahkan basis 2023, mewariskan sisa saringan (2025 % 7) menjuntai 2.\n- Blok Penetrasi 2: Nilai sisa diinjeksikan pengali menjadi (2 * 3) = 6.\n- Pemenggalan sisa antara: Terapan pelapis (6 % 7). Angka 6 secara inheren gagal tembus porsi keutuhan modulus 7, maka menampung balik utuh murni menjadi 6.\n- Pengelasan penambah ekor blok luar: Integrasi sumasi (6 + 10) menumbuhkan bobot ke besaran 16.\n- Pisau Modulus Pamungkas: Pukulan algojo sisa pamungkas (16 % 7). Nilai 16 setara menggendong utuh dua paket 7 (14), lalu menguras pundi melepaskan kebebasan angka sisa mentah senilai 2.\nHasil numerik meredam kalkulasi menampik tenang di tapal batas angka 2."
  }
];