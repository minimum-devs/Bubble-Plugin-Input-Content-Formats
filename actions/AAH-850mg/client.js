function(properties, context) {
  const inputId = properties.input_id;
  const inputElement = document.getElementById(inputId);

  if (!inputElement) {
    console.warn(`No element found with ID: ${inputId}`);
    return;
  }

  inputElement.addEventListener('input', function() {
    this.value = this.value.replace(/\s+/g, '');
  });
}