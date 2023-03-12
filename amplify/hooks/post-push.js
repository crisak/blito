const fs = require('fs')

const handle = () => {
  const output = fs.readFileSync(0, { encoding: 'utf8' })
  const data = JSON.parse(output)
  console.log('👌 Blito tall with congratulations')
  console.log('🇨🇴', output)
}

handle()
