1. Bagaimana cara menggunakan <Link> di React Router v6?
Jawab :
<Link> adalah komponen yang digunakan untuk membuat tautan navigasi di aplikasi React yang menggunakan React Router v6. kita dapat menggunakannya dengan cara mengimpornya dari react-router-dom dan menentukan prop to dengan URL tujuan. Saat tautan diklik, React Router akan menangani navigasi ke URL yang ditentukan tanpa memuat ulang seluruh halaman. 
untuk contoh ada di contoh tugas 6/tugas1.jsx

2. Apa perbedaan element prop di <Route> React Router v6 dibandingkan dengan
   component prop di versi sebelumnya?
   Jawab :
   Prop element di React Router v6 menerima elemen React sebagai nilai, sedangkan prop component di versi sebelumnya menerima komponen React. Perbedaan ini memungkinkan untuk menentukan komponen langsung di dalam rute tanpa perlu membuat komponen terpisah.

3. Bagaimana cara menerapkan lazy loading untuk komponen di React Router v6?
   Jawab :
   Lazy loading memungkinkan komponen untuk dimuat secara dinamis hanya saat dibutuhkan, yang dapat meningkatkan performa aplikasi. Di React Router v6, kita dapat menerapkan lazy loading dengan menggunakan fungsi lazy dari React dan menambahkan Suspense untuk menangani pembacaan komponen yang tertunda.
   contoh ada di contoh tugas 6/tugas3.jsx

4. Apa kegunaan dari useRoutes hook dalam React Router v6?
   Jawab :
   useRoutes hook digunakan untuk membuat router berbasis hook di React Router v6. Ini memberikan fleksibilitas dalam menentukan rute-rute aplikasi dalam sebuah fungsi, memungkinkan penggunaan logika yang lebih kompleks dalam menentukan rute-rute tersebut.

5. Bagaimana cara menerapkan breadcrumbs dengan React Router v6?
   Jawab :
   Untuk menerapkan breadcrumbs, dapat menyimpan jejak rute yang dilewati oleh pengguna dalam state aplikasi dan menggunakan informasi ini untuk membuat breadcrumbs yang sesuai dengan struktur rute.
   contoh ada di contoh tugas/tugas5.jsx

6. Bagaimana cara menangani 404 page not found di React Router v6?
   Jawab :
   Di React Router v6,menangani halaman 404 dengan menambahkan rute dengan path \* di akhir daftar rute. Ini akan menangkap semua rute yang tidak cocok dengan rute-rute yang telah didefinisikan sebelumnya.

7. Apa itu navigate function yang dikembalikan oleh useNavigate hook dan bagaimana menggunakannya?
   Jawab :
   navigate function yang dikembalikan oleh useNavigate hook digunakan untuk melakukan navigasi programatik di React Router v6. Ini memungkinkan kita untuk melakukan navigasi ke rute tertentu secara dinamis berdasarkan logika aplikasi.
   contoh ada di contoh tugas 6/tugas7.jsx

8. Bagaimana cara menangani parameter opsional dalam rute di React Router v6?
   Jawab :
   Untuk menangani parameter opsional, dapat menambahkan tanda tanya "?" setelah parameter yang ingin kita buat opsional dalam path rute.

9. Bagaimana cara menangani redirect berdasarkan kondisi di React Router v6?
   Jawab :
   Untuk menangani redirect berdasarkan kondisi, kita dapat menggunakan logika kondisional dalam komponen kita dan mengarahkan navigasi menggunakan useNavigate hook berdasarkan kondisi tersebut.
   contoh ada di contoh tugas 6/tugas9.jsx
10. Bagaimana cara mendefinisikan rute dengan beberapa parameter di React Router v6?
    Jawab :
    Di React Router v6, dapat mendefinisikan rute dengan beberapa parameter dengan menentukan path yang mengandung parameter-parameter yang diawali dengan tanda titik dua :. Misalnya, /users/:id/posts/:postId akan cocok dengan rute seperti /users/123/posts/456.
