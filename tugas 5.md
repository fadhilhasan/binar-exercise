1.Apa perbedaan utama antara React Router v5 dan v6?
Jawab: React Router v6 mengadopsi pendekatan yang berbeda dengan menggunakan komponen dan hook, sementara v5 menggunakan pendekatan konfigurasi dengan properti pada komponen.

2.Apa fungsi dari komponen <Routes> di React Router v6?
Jawab: Komponen <Routes> digunakan untuk mendefinisikan rute-rute di dalam aplikasi React Router v6, menggantikan penggunaan <Switch> di v5.

3.Bagaimana cara mendefinisikan rute dasar di React Router v6?
Jawab: Rute dasar didefinisikan dengan menetapkan path="/", biasanya di dalam komponen <Routes>.

4.Apa itu nested routes di React Router v6 dan bagaimana cara menerapkannya?
Jawab: Nested routes adalah rute-rute yang ditempatkan di dalam rute lainnya, memungkinkan hierarki rute yang lebih kompleks dalam aplikasi.
contoh ada di file 'contoh tugas 5/soal4.jsx'

5.Apa fungsi dari hook useNavigate di React Router v6?
Jawab: Hook useNavigate digunakan untuk mendapatkan fungsi navigasi di dalam komponen, memungkinkan navigasi programatik tanpa perlu menggunakan properti history.

6.Bagaimana cara melakukan redirect di React Router v6?
Jawab: Redirect dapat dilakukan dengan menggunakan hook useNavigate untuk mendapatkan fungsi navigasi, lalu memanggil navigate dengan path tujuan.
contoh ada di file 'contoh tugas 5/soal6.jsx'

7.Apa kegunaan dari useParams hook dalam React Router v6?
Jawab: useParams hook digunakan untuk mendapatkan parameter dinamis yang diambil dari URL di React Router v6, seperti id produk dalam URL /products/:id.

8.Bagaimana cara mengakses query string di React Router v6?
Jawab: Query string dapat diakses menggunakan objek SearchParams yang diperoleh dari properti searchParams pada objek location, memungkinkan pengambilan nilai dari parameter yang dilewatkan melalui URL.
contoh ada di fole 'contoh tugas 5/soal8.jsx'

9.Apa itu outlet di React Router v6 dan bagaimana penggunaannya?
Jawab: Outlet adalah komponen di React Router v6 yang menentukan di mana komponen-komponen turunan dari sebuah rute akan dirender, berguna untuk menentukan area di layout aplikasi yang akan ditempati oleh komponen-komponen yang berasal dari rute-rute.
contoh ada fi file 'contoh tugas 5/soal9.jsx'

10.Bagaimana cara melindungi rute yang memerlukan autentikasi di React Router v6?
Jawab: Untuk melindungi rute yang memerlukan autentikasi di React Router v6, kita dapat menggunakan pengalihan (redirect) jika pengguna tidak login saat mencoba mengakses rute tertentu, memastikan hanya pengguna yang login yang dapat mengakses rute tersebut.
contoh ada di file 'contoh tugas 5/soal10.jsx'
