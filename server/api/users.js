//get list user
module.exports = function (connection, app, bcrypt) {
  app.get('/api/users', function (req, res) {
    connection.query("SELECT * FROM users ORDER BY -id", function (err, results, fields) {
      if (err) throw err;
      let data = results
      for (let i = 0; i < data.length; i++) {
        delete data[i].password
      }
      res.send(data)
    });
  })

  //search user
  app.get('/api/users/filter-user', function (req, res) {
    let paramsSearch = req.query.search

    connection.query('SELECT * from users where username like "%' + paramsSearch + '%"',
      function (err, results) {
        if (err) throw err;
        let data = results
        for (let i = 0; i < data.length; i++) {
          delete data[i].password
        }
        return res.send({ message: 'success', data: data, message: 'users list.', status: 200 })
      })
  })

  // create user
  app.post('/api/users', function (req, res) {
    let reqUsers = {
      birthday: req.body.birthday,
      email: req.body.email,
      gender: req.body.gender,
      username: req.body.username,
      password: req.body.password
    }

    if (!reqUsers.birthday || !reqUsers.email || !reqUsers.gender || !reqUsers.username || !reqUsers.password) {
      return res.status(400).send({ error: true, message: 'Please provide name' });
    }

    // reqUsers.password = bcrypt.hashSync(reqUsers.password, 10)

    connection.query('INSERT INTO users SET ? ', reqUsers, function (error, results) {
      if (error) throw error
      var sql = `SELECT * from users where id = ${results.insertId}`

      connection.query(sql, function (error, result) {
        if (error) throw error
        let data = result
        for (let i = 0; i < data.length; i++) {
          delete data[i].password
        }
        return res.send({ message: 'success', data: data, message: 'users list.', status: 200 })
      })
    })
  })


  //  Update user with id
  app.put('/api/users/:id', function (req, res) {
    let reqUpdateUser = {
      birthday: req.body.birthday,
      username: req.body.username,
      gender: req.body.gender
    }

    if (!req.params.id || !reqUpdateUser.birthday || !reqUpdateUser.username || !reqUpdateUser.gender) {
      return res.status(400).send({ error: user, message: 'Please provide user and user_id' })
    }

    connection.query("UPDATE users SET ? WHERE id = ?", [reqUpdateUser, req.params.id], function (error, results) {
      if (error) throw error;
      const sql = `SELECT * from users where id = ${req.params.id}`

      connection.query(sql, function (error, result) {
        if (error) throw error
        let data = result
        for (let i = 0; i < data.length; i++) {
          delete data[i].password
        }
        return res.send({ error: false, data: data[0], message: 'user has been updated successfully.' })
      })
    });
  });

  //  Delete user
  app.delete('/api/users/:id', function (req, res) {
    let id = req.params.id
    if (!id) {
      return res.status(400).send({ error: true, message: 'Please provide user_id' })
    }
    connection.query('DELETE FROM users WHERE id = ?', id, function (error, results) {
      if (error) throw error
      return res.send({ message: 'delete success', data: [], status: 200 })
    });
  });

  app.listen(9000)
}
