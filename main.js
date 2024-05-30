
  // Menambahkan event listener pada tombol-tombol "Ikuti"
document.querySelectorAll('.feed-items button').forEach(button => {
    button.addEventListener('click', function() {
        // Mengganti teks tombol setelah diklik
        this.textContent = this.textContent.trim() === 'Ikuti' ? 'Batal Ikuti' : 'Ikuti';
    });
});


    document.addEventListener("DOMContentLoaded", function() {
        const filterOptions = document.querySelectorAll(".filter-options");

    filterOptions.forEach(function(filter) {
        filter.addEventListener("click", function() {
            // Hapus kelas 'active' dari semua filter lainnya
            filterOptions.forEach(function(option) {
                option.classList.remove("active");
            });
            // Tambahkan kelas 'active' ke filter yang diklik
            filter.classList.add("active");

            // Lakukan sesuatu berdasarkan filter yang dipilih, misalnya tampilkan konten sesuai dengan filter
            console.log("Menerapkan filter:", filter.textContent);
        });
    });
});
