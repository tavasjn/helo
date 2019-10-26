const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        // ^^^ Connects to DataBase //
        // Declare a let to find existing user //
        let existingUser = await db.check_username(username);
        existingUser= existingUser[0];

        // Next is if statement to establish connection to user // 

        if (!existingUser) {
            return res.status(409).send('UserName does not exist')
        }
        const authenticated = bcrypt.compareSync(password, existingUser.password);

        if(authenticated){
            delete existingUser.password;
            req.session.user = existingUser;
            return res.status(202).send(req.session.user);
        } else {
            return res.status(401).send('Password is incorrect')
        }
    },

    register: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        // Connected to the data base //

        let existingUser = await db.check_username(username);
        existingUser = existingUser[0];

        // If statement to see if user already is existing // 
        if(existingUser){
            return res.status(409).send('Username is taken :(');
        }
        // Now we encrypt the password using hash // 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let newUser = await db.register({
            username,
            password: hash
        });
        newUser = newUser[0];
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200);
    }

}