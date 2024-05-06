1. Bagaimana cara menggunakan createBrowserRouter di React Router v6?
   Jawab :
   untuk contoh ada di 'contoh tugas 7/soal1.jsx'
2. Apa itu <RouterProvider> di React Router v6 dan bagaimana penggunaannya?
   Jawab :
   <RouterProvider> adalah komponen yang menyediakan konteks router untuk komponen-komponen yang ada di dalamnya. Ini berguna ketika ingin menyediakan router ke beberapa bagian aplikasi tanpa harus membungkus semuanya dalam <BrowserRouter>. untuk contoh ada di 'contoh tugas 7/soal2.jsx'
3. Bagaimana cara menggunakan createRoutesFromElements dalam React Router v6?
   Jawab :
   contoh ada di 'contoh tugas 7/soal3.jsx'
4. Apa itu resolvePath di React Router v6 dan bagaimana penggunaannya?
   Jawab :
   resolvePath adalah fungsi yang digunakan untuk mengonversi path relatif menjadi path lengkap berdasarkan lokasi saat ini. Ini berguna ketika kita ingin membuat link atau melakukan navigasi programatik secara dinamis
   contoh ada di 'contoh tugas 7/soal4.jsx'
5. Bagaimana cara mengimplementasikan search functionality menggunakan React Router v6?
   Jawab :
   Mengimplementasikan search functionality dengan menggunakan parameter query string dalam URL. Kita dapat mengakses query string menggunakan useSearchParams hook untuk mendapatkan nilai query string dan navigate function untuk melakukan navigasi dengan parameter query string yang baru.
   contoh ada di 'contoh tugas 7/soal5.jsx'
6. Apa itu caseSensitive prop pada <Route> dan apa fungsinya?
   Jawab :
   caseSensitive prop pada <Route> adalah prop yang menentukan apakah pencocokan path rute harus memperhatikan huruf besar dan kecil atau tidak. Jika prop ini disetel menjadi true, maka pencocokan path akan memperhatikan perbedaan huruf besar dan kecil.
7. Bagaimana cara mengekspos path sebagai prop ke komponen rute di React Router v6?
   Jawab :
   contoh ada di 'contoh tugas 7/soal7.jsx'
8. Apa itu basename dalam <BrowserRouter> dan bagaimana penggunaannya?
   Jawab :
   basename adalah prop yang digunakan untuk menentukan bagian dari URL dasar yang harus diabaikan saat mencocokkan rute. Ini berguna ketika aplikasi kita di-host dalam subfolder dari domain utama
   contoh ada di 'contoh tugas 7/soal8.jsx'
9. Bagaimana cara menggunakan createMemoryRouter di React Router v6?
   Jawab :
   contoh ada di 'contoh tugas 7/soal9.jsx'
10. Bagaimana cara menggunakan generatePath di React Router v6?
    Jawab : contoh ada di 'contoh tugas 7/soal10.jsx'
