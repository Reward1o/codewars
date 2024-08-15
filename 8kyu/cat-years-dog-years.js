// ⚠️DESCRIPTION:

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// ✅SOLUTION :

const humanYearsCatYearsDogYears = (humanYears) => {
   let dogYears = 24;
   let catYears = 24;

   if (humanYears === 1) return [humanYears, catYears - 9, dogYears - 9];
   if (humanYears === 2) return [humanYears, catYears, dogYears];

   for (let year = 2; year < humanYears; year++) {
      catYears += 4;
      dogYears += 5;
   }
   return [humanYears, catYears, dogYears];
};
