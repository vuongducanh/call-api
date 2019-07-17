//get list user
module.exports = function (connection, app, bcrypt) {
  app.post('/api/login', function(req, res) {
    let username = req.body.username
    let password = req.body.password

    if (!username || !password) {
      return res.status(400).send({ error: true, message: 'Please enter user name or password' })
    } else {
      connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
        if (error) throw error
        return res.status(200).send({ error: false, message: 'login success', status: 200})
      })
    }
  })
}
