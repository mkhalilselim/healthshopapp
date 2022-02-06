import bcrypt from 'bcryptjs'

const pass = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: pass('m12345'),
        isAdmin: true
    },
    {
        name: 'Ahmed',
        email: 'ahmed@gmail.com',
        password: pass('a12345'),
    },
    {
        name: 'Mona',
        email: 'mona@gmail.com',
        password: pass('m12345'),
    },
]

export default users