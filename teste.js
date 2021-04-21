const arr = ['meters', 'value']
const object = { meters: '1', value: '2' }

for (const i of arr) {
//   console.log(i)
  const x = i.includes(object[i])
  console.log(x)
}
