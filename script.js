const btn = document.getElementById("hitung");

btn.addEventListener("click", function () {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if(height == "" || weight == "" || height <= 0 || weight <= 0){
        alert("Masukkan data yang valid");
        return;
    }

    height = height /100 ;

    let BMI = weight / (height * height);

    BMI = BMI.toFixed(1);

    document.querySelector("#hasil").innerHTML = BMI;

    let status = "";

    if (BMI < 18.5){
        status = "Kurus";
    }
    if (BMI >= 18.5 && BMI <= 24.9){
        status = "Normal";
    }
    if (BMI >= 25 && BMI <= 29.9){
        status = "Berlebih";
    }
    if (BMI >= 30){
        status = "Obesitas";
    }

    document.querySelector(".comment").innerHTML = `Kamu termasuk dalam kategori</br><span id="comment">${status}</span>`;
});