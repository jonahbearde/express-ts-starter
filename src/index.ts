import app from './app';
require('dotenv').config()
// you can still grab environment variables from .env
const port = parseInt(process.env.PORT as string)

app.listen(port, () => {
  console.log(`Listening in: http://localhost:${port}`)
})

