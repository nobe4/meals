let r;

const seed = parseInt(document.location.hash.slice(1));
if (seed) {
  r = seed;
} else {
  r = Math.floor(Math.random() * 1000);
  document.location.hash = `#${r}`;
}

function rand() {
  return (r = (r * 48271) % 2147483647) / 2147483647;
}

// somehow, using .sort(() => rand() - 0.5) doesn't work the same on mobile and on desktop.
export function shuffle(a) {
  return a
    .map((i) => [rand(), i])
    .sort((a, b) => a[0] - b[0])
    .map((i) => i[1]);
}
