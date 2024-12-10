// Select DOM elements
const backgroundDropdown = document.getElementById('background');
const fontDropdown = document.getElementById('font');
const colorDropdown = document.getElementById('color');
const strokeDropdown = document.getElementById('stroke');
const fontSizeInput = document.getElementById('fontSize');
const editableTextInput = document.getElementById('editableText');
const preview = document.getElementById('preview');
const textOverlay = document.getElementById('textOverlay');

// Update background image
backgroundDropdown.addEventListener('change', () => {
    const selectedImage = backgroundDropdown.value;
    preview.style.backgroundImage = `url(${selectedImage})`;
});

// Update font style
fontDropdown.addEventListener('change', () => {
    textOverlay.style.fontFamily = fontDropdown.value;
});

// Update font color
colorDropdown.addEventListener('change', () => {
    textOverlay.style.color = colorDropdown.value;
});

// Update stroke color
strokeDropdown.addEventListener('change', () => {
    textOverlay.style.webkitTextStroke = `2px ${strokeDropdown.value}`;
});

// Update font size
fontSizeInput.addEventListener('input', () => {
    textOverlay.style.fontSize = `${fontSizeInput.value}px`;
});

// Update editable text
editableTextInput.addEventListener('input', () => {
    textOverlay.textContent = editableTextInput.value;
});
