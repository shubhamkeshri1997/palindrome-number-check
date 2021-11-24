function validatePalin(str) {
    var len = string.length;
    for (var i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            alert('It is not a palindrome');
        }
    }
    alert('It is a palindrome');
}
var string = prompt('Enter a string or number: ');
var value = validatePalin(string);
console.log(value);
