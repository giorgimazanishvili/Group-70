// 5) მოცემულია ტექსტი. დაწერეთ პროგრამა, რომელიც დაითვლის რამდენი სიტყვა მთავრდება თანხმოვანი ასოთი (ინგლისურად ნებისმიერი თანხმოვანი ან ქართულად ნებისმიერი თანხმოვანი). ამოცანა შეასრულეთ reduce მეთოდის გამოყენებით.

function countConsonantEndingWords(text) {
  // ინგლისური და ქართული ხმოვანები
  const vowels = "aeiouAEIOUაეიოუ";

  return text
    .split(/\s+/) // სიტყვებად დაყოფა
    .reduce((count, word) => {
      // მოვაშოროთ პუნქტუაცია სიტყვის ბოლოდან
      const cleanedWord = word.replace(/[^a-zA-Zა-ჰ]/g, "");

      if (cleanedWord.length === 0) return count;

      const lastChar = cleanedWord[cleanedWord.length - 1];

      // თუ ბოლო ასო არის ასო და არა ხმოვანი → თანხმოვანია
      if (!vowels.includes(lastChar)) {
        return count + 1;
      }

      return count;
    }, 0);
}

// მაგალითი
const text = "Hello world პროგრამა მუშაობს კარგად test ტექსტი code";
console.log(countConsonantEndingWords(text));