document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const uploadedImages = document.getElementById("uploadedImages");

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "200px";
            img.style.margin = "10px";
            uploadedImages.appendChild(img);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Pilih file terlebih dahulu!");
    }
});
