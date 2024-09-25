let r;

const seed = parseInt(document.location.hash.slice(1));
if (seed) {
  r = seed;
} else {
  r = Math.floor(Math.random() * 1000);
  document.location.hash = `#${r}`;
}

export function rand() {
  return (r = (r * 48271) % 2147483647) / 2147483647;
}
