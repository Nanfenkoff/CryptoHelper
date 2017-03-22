var templatevar = "somevar";

function encrypttemplate(input) {
}

function decrypttemplate(input) {
}

document.addEventListener('DOMContentLoaded', function() {
    var y = document.getElementById('encode');
    y.addEventListener('click', function() {
        document.content.crypt.value=encrypttemplate(document.content.crypt.value);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var x = document.getElementById('decode');
    x.addEventListener('click', function() {
        document.content.crypt.value=decrypttemplate(document.content.crypt.value);
    });
});

