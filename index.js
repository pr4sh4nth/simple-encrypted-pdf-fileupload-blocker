const input = document.querySelector('input[type="file"]')
const button = document.querySelector('button');
input.addEventListener('change', function (event) {

    //var input = event.target;
    button.disabled = false;
    var reader = new FileReader();
    reader.onload = function (event) {
        console.clear();
        var contents = event.target.result;
        
        if (contents.indexOf('/Encrypt') !== -1) {
           // console.log("Is encrypted");
            button.disabled = true;
            alert('Uploading PDF files that are encrypted/password-protected is not allowed.')
        } else {
           // console.log("Not encrypted");
        }
       console.log("File contents: " + contents);
    };

    reader.onerror = function (event) {
        console.error("File could not be read! Code "  +event.target.error.code);
    };

    reader.readAsText(input.files[0]);

}, false)