  
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // ავტომატური reload ჩერდება

      // შეტყობინების ჩვენება
      alert("ფორმა წარმატებით გაგზავნილია!\nსახელი: " + form.name.value + "\nელ.ფოსტა: " + form.email.value);

      // აქ შეგიძლია საჭიროების მიხედვით მონაცემები ფორმიდან წამოღება ან სხვა ოპერაციები
    });
  
