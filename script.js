const preview = document.getElementById('preview');
const fontDropdown = document.getElementById('font');
const colorDropdown = document.getElementById('color');
const strokeDropdown = document.getElementById('stroke');

fontDropdown.addEventListener('change', () => {
    preview.style.fontFamily = fontDropdown.value;
});

colorDropdown.addEventListener('change', () => {
    preview.style.color = colorDropdown.value;
});

strokeDropdown.addEventListener('change', () => {
    preview.style.webkitTextStroke = `2px ${strokeDropdown.value}`;
});
