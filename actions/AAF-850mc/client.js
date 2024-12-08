function(properties, context) {
  const inputId = properties.input_id;
  const handleInput = document.getElementById(inputId);

  if (!handleInput) {
    console.warn(`No element found with ID: ${inputId}`);
    return;
  }

  handleInput.addEventListener('input', function() {
    let value = this.value.replace(/[^A-Za-z0-9_]/g, '');

    if (!value.startsWith('@')) {
      value = '@' + value;
    }

    this.value = value.toLowerCase();
  });
}