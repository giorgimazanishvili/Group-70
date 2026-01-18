const input = document.getElementById('nameInput');

// change იძახება მაშინ, როცა ტექსტი შეიცვალა
// და კურსორი გავიდა input-იდან
input.addEventListener('change', () => {
  // ტექსტის გადაყვანა uppercase-ში
  input.value = input.value.toUpperCase();

  // შეტყობინება
  alert('Name changed!');
});
