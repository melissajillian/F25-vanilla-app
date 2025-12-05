// const addNumbers = (first, second) => {
//   return first + second;
// }

// if (typeof module !== 'undefined') {
//   module.exports = {
//     addNumbers
//   }
// }

document.querySelector("#click-me").addEventListener("click", () => {
  document.querySelectorAll("div").forEach((dive) => dive.remove());
})

