// Data gambar contoh
const imageData = [
    "asset/images/galery-image1.jpg",
    "asset/images/galery-image2.jpeg",
    "asset/images/galery-image3.jpg",
    "asset/images/image4.jpg",
    "asset/images/image5.jpg",
    "asset/images/image6.jpg",
    "asset/images/image7.jpg",
    "asset/images/image8.png",
    "asset/images/image9.jpg",
    "asset/images/image10.jpg",
    "asset/images/image11.jpg",
    "asset/images/image12.jpg",
    "asset/images/image13.jpg",
    "asset/images/image17.jpg",
    "asset/images/image15.png",
    "asset/images/image16.jpg",
];

// Jumlah item per halaman
const itemsPerPage = 8; // karena ada 8 gambar

// Fungsi untuk membuat dan menampilkan halaman
function renderPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log(startIndex, endIndex, "<<<<<< index pg");
    const pageData = imageData.slice(startIndex, endIndex);

    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';
    pageData.forEach(src => {
        const img = document.createElement('img');
        img.classList.add('image');
        img.src = src;
        img.width = 250;
        img.height = 200;
        contentDiv.appendChild(img);
    });
}

// Fungsi untuk membuat tombol halaman
function renderPagination() {
    const paginationDiv = document.querySelector('.pagination');
    paginationDiv.innerHTML = '';

    const numPages = Math.ceil(imageData.length / itemsPerPage);
    for (let i = 1; i <= numPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => renderPage(i));
        paginationDiv.appendChild(button);
    }
}

// Menampilkan halaman pertama ketika halaman dimuat
renderPage(1);
// Menampilkan tombol halaman
renderPagination();
