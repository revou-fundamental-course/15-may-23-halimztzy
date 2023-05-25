const tabSquare = document.getElementById(square-link);

const pageSquare = document.getElementById(page-Square);

tabSquare.addEventListener("click", setActivePage);

function setActivePage(event) {
    tabSquare.classlist.remove('active');

    const clickedlink = event.target;
    clickedlink.classlist.add('active');
    
    pageSquare.classlist.remove('active');

    const clickedlinkId = event.target.id;
    
    if (clickedlinkId === "square-link") {
        pageSquare.classlist.add('active');
    }
}

function validNumericInput(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');

    const count = (input.value.match(/\./g) || []).length;
    if (count > 1) {
        input.value = input.value.replace(/\.+$/, '');
    }
}

//Hitung Persegi
function hitungluas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    var output = document.getElementById("output_luas");
    const resultSquare = sisiLuas*sisiLuas
    const fixedluasSquare = resultSquare.tofixed(2);

    document.getElementById("rumus-luas").innerHTML = sisiLuas + ' x ' + sisiLuas;
    document.getElementById("result-luas").innerHTML = fixedLuasSquare

    output.style.display = "block";
}
    function resetluas(flag) {
        document.getElementById("output_luas").style.display = flag === 1 ? "block" : "none";
        document.getElementById("sisi-luas").value = '';
       }
    
function hitungkeliling() {
    var sisikeliling = document.getElementById("sisi-keliling").value;
    var output = document.getElementById("output_keliling");
    
    document.getElementById("rumus-keliling").innerHTML = sisikeliling + ' x 4';
    document.getElementById("result-keliling").innerHTML = sisikeliling*4
    
    output.style.display = "block";
    }
    function resetluas(flag) {
    document.getElementById("output_keliling").style.display = flag === 1 ? "block" : "none";
    document.getElementById("sisi-keliling").value = '';
           }