//Generate pin --start---
const pinBtn = document.getElementById('pinBtn');
pinBtn.addEventListener('click', function () {
    const pinText = document.getElementById('pinText').value;
    let num = 1000 + (Math.random() * 9000);
    let corrected_num = Math.round(num);
    document.getElementById('pinText').value = corrected_num;
    document.getElementById("submitBtn").disabled = false;
    document.getElementById('submitBtn').classList.remove('removeBtn');
    var value = document.getElementById('tryLeft').innerText = 3
})
// generate pin --end--

// number add in text box from calculator number --start--
function calcNum(calNum) {
    let calcNumber = document.getElementById("calcText").value += calNum;
}
// --end--

// clear all the number from the text box --start--
function clean() {
    document.getElementById("calcText").value = "";
}
// --end--

// delete number one by one from the text box --start--
function backSpace() {
    const backBtn = document.getElementById("calcText").value;
    document.getElementById("calcText").value = backBtn.substring(0, backBtn.length - 1)
}
// --end--

// function that we are checking if generate-pin and calculator pin number matching --start -- 

const subBtn = document.getElementById('submitBtn');
subBtn.addEventListener('click', function () {
    let corrected_num = document.getElementById('pinText').value;
    let calcNumber = document.getElementById("calcText").value;
    // if number is match 
    if (corrected_num == calcNumber) {
        document.getElementById('pinMatch').style.display = 'block';
        document.getElementById('pinNotMatch').style.display = 'none';
        document.getElementById('pinText').value = "";
        document.getElementById("calcText").value = "";


    }
    // if number is not matched then decrease the try left value -- 
    else if (corrected_num != calcNumber) {
        var tryLeftValue = parseInt(document.getElementById('tryLeft').innerText);
        tryLeftValue--;
        document.getElementById('pinNotMatch').style.display = 'block';
        document.getElementById("calcText").value = "";

        if (tryLeftValue <= 0) {
            document.getElementById('tryLeft').innerText = tryLeftValue;
            document.getElementById('submitBtn').classList.add('removeBtn');
            document.getElementById('pinNotMatch').style.display = "none";
            document.getElementById('pinMatch').style.display = 'none';

        } else {
            document.getElementById('tryLeft').innerText = tryLeftValue;
        }

    }
    else {
        document.getElementById('pinNotMatch').style.display = 'block';
        document.getElementById('pinMatch').style.display = 'none';
    }

})


// --end -- 

