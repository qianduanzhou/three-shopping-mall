export default function request(name: string) {
  return new Promise((resolve, reject) => {
    import(`./json/${name}.json`).then(res => {
      resolve(res.data);
    })
  })
}