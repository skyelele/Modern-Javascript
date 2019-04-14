// IIFEs

function game() {
  const score = Math.random() * 10;
  console.log(score >= 5);
}
game();

(function() {
  const score = Math.random() * 10;
  console.log(score >= 5);
})();

console.log(score);

(function(goodLuck) {
  const score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
