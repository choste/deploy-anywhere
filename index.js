const port = process.env.PORT || 3000

const { handler } = require('./app')

handler.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
