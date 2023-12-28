export function shuffleArray(selectedArray) {
  const array = [...selectedArray];

  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // Dizide eleman kalmayana kadar devam et
  while (0 !== currentIndex) {
    // Kalan elemanlardan rastgele birini seç
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Seçilen eleman ile mevcut elemanı yer değiştir
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
