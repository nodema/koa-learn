
import app from './app/index.js'
import configOBJ from './config/config.default.js'
const { APP_PORT } = configOBJ

app.listen(APP_PORT, () => {
  console.log(`server is running at http://localhost:${APP_PORT}`)
})