function validateHello(greetings) {
  const changed = greetings.toLowerCase()
  return changed.includes('hello') || 
  changed.includes('ciao') || 
  changed.includes('salut') || 
  changed.includes('hallo') || 
  changed.includes('hola') || 
  changed.includes('ahoj') ||
  changed.includes('czesc')
}
console.log(validateHello('tRes: lA HastA, CiAO'))
