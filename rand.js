let r;

const seed = parseInt(document.location.hash.slice(1));
if (seed) {
  r = seed;
} else {
  const now = new Date();
  r = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
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
