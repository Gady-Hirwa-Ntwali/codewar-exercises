

function aliasGen(first, last) {
  const firstChar = first[0].toUpperCase();
  const lastChar= last[0].toUpperCase();

  if (!firstName[firstChar] || !surname[lastChar]) {
    return "Your name must start with a letter from A - Z.";
  }
  return `${firstName[firstChar]} ${surname[lastChar]}`;
}