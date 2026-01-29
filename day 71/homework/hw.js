document.getElementById("showDateBtn").addEventListener("click", function() {
  const today = new Date().toLocaleDateString();
  document.getElementById("dateBox").innerHTML = today;
});