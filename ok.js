function reverseWords(str) {
    const updated = str.split(' ').map(m => m.split('').reverse().join(''))
    return updated.join(' ')
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

