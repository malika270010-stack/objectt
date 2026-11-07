// let user = {
//   name: "Malika",
//   lastname: "abdullayeva",
//   age: 16,
//   role: "oquvchi",
//   tell: "777516707",
//   address: {
//     city: "Fergana",
//     country: "Ozbekiston",
//   },
//   money: 12n,
//   student: null,
// };
// console.log(user.name.toUpperCase());
// let product = {
//   name: "samsung",
//   price: 1000,
//   stock: 22,
//   category: "telefon",
// };
// function allPrice(price, stock) {
//   return price * stock;
// }
// console.log(allPrice(product.price, product.stock));
// function charCount(str) {
//   let obj = {};
//   for (let i of str) {
//     if (obj[i]) {
//       obj[i] += 1;
//     } else {
//       obj[i] = 1;
//     }
//   }
//   return obj;
// }
// console.log(charCount("hello"));
// console.log(charCount("abdullayyeva"));
// ==============================================================================================================================================
// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.
// function calc(str) {
//   if (str.includes("*")) {
//     let kopaytma = str.indexOf("*");
//     let c = Number(str.slice(0, kopaytma));
//     let d = Number(str.slice(kopaytma + 1));
//     return c * d;
//   } else if (str.includes("+")) {
//     let yigindi = str.indexOf("+");
//     let a = Number(str.slice(0, yigindi));
//     let b = Number(str.slice(yigindi + 1));

//     return a + b;
//   } else if (str.includes("-")) {
//     let ayirma = str.indexOf("-");
//     let x = Number(str.slice(0, ayirma));
//     let y = Number(str.slice(ayirma + 1));
//     return x - y;
//   }
// }
// console.log(calc("23+4"));
// console.log(calc("45-15"));
// console.log(calc("13+2-5*2"));
//=============================================================================================================================================
// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on.
// function teng10(a, b) {
//   if ( a === 10 || b === 10 || a + b === 10;) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(teng10(9, 10));
// console.log(teng10(9, 9));
// console.log(teng10(1, 9));
// ============================================================================================================================================
// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.
// function litrMasofa(km) {
//   return Math.max(100, km * 10);
// }

// console.log(litrMasofa(15));
// console.log(litrMasofa(23.5));
// console.log(litrMasofa(3));
// ==========================================================================================================================================
// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// function maxson(x, y) {
//   return Math.max(x, y);
// }

// console.log(maxson(3, 7));
// console.log(maxson(-1, 0));
// console.log(maxson(1000, 400));
// =========================================================================================================================================
// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.
// function arr(x, y) {
//   return [x, y];
// }

// console.log(arr(1, 2));
// console.log(arr(51, 21));
// console.log(arr(512124, 215));
// ========================================================================================================================================
// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir17
// birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold
// yolg’on.
// function tengStrings(str1, str2) {
//   if (str1.length === str2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(tengStrings("AB", "CD"));
// console.log(tengStrings("ABC", "DE"));
// console.log(tengStrings("hello", "edabit"));
// ======================================================================================================================================
// 37.Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
// aks holda false.
// function boshStr(str) {
//   return str === "";
// }

// console.log(boshStr(""));
// console.log(boshStr(" "));
// console.log(boshStr("a"));
//=====================================================================================================================================
// 38.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
// qaytarsin, aks holda false.
// function bolinsin5(son) {
//   if (son % 5 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(bolinsin5(5));
// console.log(bolinsin5(-55));
// console.log(bolinsin5(37));
//=====================================================================================================================================
// 39.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
// qaytarsin, aks holda false.
// function bolinsin100(son) {
//   if (son % 100 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(bolinsin100(1));
// console.log(bolinsin100(1000));
// console.log(bolinsin100(100));
// ===================================================================================================================================
// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida
// nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.
// function uzunlik(str) {
//   if (str === "") {
//     return 0;
//   }

//   return 1 + uzunlik(str.slice(1));
// }

// console.log(uzunlik("apple"));
// console.log(uzunlik("make"));
// console.log(uzunlik("a"));
// console.log(uzunlik(""));
// console.log(uzunlik(" "));
// ==================================================================================================================================
// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false
// function bolinsin(x, y) {
//   if (x % y === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bolinsin(85, 4));
// ===================================================================================================================================
// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.
// function raqam(str) {
//   return Number(str);
// }
// console.log(raqam("6"));
// console.log(raqam("1000"));
// console.log(raqam("12"));
// ===================================================================================================================================
// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.
// function tortYuzi(a, b) {
//   if (a <= 0 || b <= 0) {
//     return -1;
//   }
//   return a * b;
// }

// console.log(tortYuzi(3, 4));
// console.log(tortYuzi(10, 11));
// console.log(tortYuzi(-1, 5));
// console.log(tortYuzi(0, 2));
// ====================================================================================================================================
//  44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin
// function ismFam(ism, familiya) {
//   return familiya + ", " + ism;
// }

// console.log(ismFam("First", "Last"));
// console.log(ismFam("John", "Doe"));
// console.log(ismFam("Mary", "Jane"));
// ================================================================================================================================
// 45.Quyidaga namunani kuzatgan holda funksiya yasang.
// function bug(day) {
//   if (day === true) {
//     return `sad days`;
//   } else {
//     return `it's a good day`;
//   }
// }
// console.log(bug(true)); // "sad days"
// console.log(bug(false)); // "it's a good day"
// console.log(bug(true));
// =================================================================================================================================
// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib
// qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.
// function tushirMassiv(arr, tushirishSoni) {
//   return arr.slice(tushirishSoni);
// }

// console.log(tushirMassiv([1, 2, 3], 1)); // [2, 3]
// console.log(tushirMassiv([1, 2, 3], 2)); //[3]
// console.log(tushirMassiv([1, 2, 3], 5)); // []
// console.log(tushirMassiv([1, 2, 3], 0)); // [1, 2, 3]
// ================================================================================================
// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.
// function ovozlar(ovozObj) {
//   return ovozObj.upvotes - ovozObj.downvotes;
// }

// console.log(ovozlar({ upvotes: 13, downvotes: 0 })); //13
// console.log(ovozlar({ upvotes: 2, downvotes: 33 })); //-31
// console.log(ovozlar({ upvotes: 132, downvotes: 132 })); // 0
// =================================================================================================
// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.
// function negativ(son) {
//   if (son > 0) {
//     return son * -1;
//   } else {
//     return son;
//   }
// }

// console.log(negativ(4)); //-4
// console.log(negativ(15)); //-15
// console.log(negativ(-4)); // -4
// console.log(negativ(0)); // 0
// ===============================================================================================
// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang. Reverse metodi siz ham urinib ko’ring.
// function almash(arr) {
//   return arr.reverse();
// }

// console.log(almash([1, 2, 3, 4]));
// console.log(almash([9, 9, 2, 3, 4]));
// console.log(almash([]));
// ==============================================================================================
// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.
// function kinogaKirish(yosh, otaOna) {
//   if (yosh >= 15 && otaOna === true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(kinogaKirish(14, true));
// console.log(kinogaKirish(14, false));
// console.log(kinogaKirish(16, false));
