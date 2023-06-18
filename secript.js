
        
 const carouselContainer = document.querySelector('.carousel-container');
 setInterval(() => {
     carouselContainer.scrollLeft += carouselContainer.offsetWidth;
 }, 5000);

 function kirimData() {
    var tanggal = document.getElementById("birth-day").value;
    var bulan = document.getElementById("birth-month").value;
    var tahun = document.getElementById("birth-year").value;
    var episode = document.getElementById("episode").value;

    var selectedEpisode = "";
    if (episode === "episode1") {
        selectedEpisode = "The Last Naruto the Movie";
    } else if (episode === "episode2") {
        selectedEpisode = "Naruto Shippuuden Movie 5 Blood Prison";
    } else if (episode === "episode3") {
        selectedEpisode = "Naruto Shippuuden Movie 6 Road to Ninja";
    }

    var alamat = document.getElementsByName("alamat")[0].value;

    var jadwalPenayangan = "Jadwal penayangan untuk tanggal " + tanggal + "/" + bulan + "/" + tahun + " adalah:\n\n" +
        "Episode yang dipilih: " + selectedEpisode + "\n" +
        "Alamat pengiriman: " + alamat;

    alert(jadwalPenayangan);
}
