import model from '../models';
import user from '../models/user';

        const { User } = model;

        class Users {
          static signUp(req, res) {
            const { name, username, email, password } = req.body
              return User
                .create({
                  name,
                  username,
                  email,
                  password
                })
                .then(userData => res.status(201).send({
                  success: true,
                  message: 'User successfully created',
                  userData
                }))
            }
            static list(req, res) {
              return User
                .findAll()
                .then(users=> res.status(200).send(users));
            }
        }
        

        export default Users;
