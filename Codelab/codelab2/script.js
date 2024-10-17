document.getElementById('calculateBtn').addEventListener('click', function() {
    var bil1 = parseFloat(document.getElementById('bil1').value);
    var bil2 = parseFloat(document.getElementById('bil2').value);
    var result = bil1 + bil2;
    document.getElementById('result').textContent = result;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('bil1').value = '';
    document.getElementById('bil2').value = '';
    document.getElementById('result').textContent = '0';
});
