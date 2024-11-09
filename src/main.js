
import app from './app/index.js'
import port from './config/config.default.js'

app.listen(port, () => {
  console.log(port)
  console.log(`server is running at http://localhost:${port}`)
})