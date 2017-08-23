module.exports = app => {
  app.get('/api', (req, res) => {
    res.send('api works');
  })

  app.get('/dude', (req, res) => {
    res.send('cool dude');
  })
}
