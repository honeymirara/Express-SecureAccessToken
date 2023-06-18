function isValidUserBody(req, res, next) {
    const { name, surname} = req.body;
    if (!name) throw new Error('name is not found');
    if (!isNaN(name)) throw new Error('name is invalid');
    if (!isNaN(surname)) throw new Error('surname is invalid');
    if (!surname) throw new Error('surname is not found');
    

    next();
};

function isValidUser(req, res, next) {
    const { email, pwd } = req.body;
    if (!email) throw new Error('email is not found');
    if (!pwd) throw new Error('pwd is not found');
    if (pwd.length < 8) throw new Error('this password is too short');
    if (!/^[a-zA-Z0-9\_\-\]+\@[a-z]+\.[a-z]+$/gm.test(email)) throw new Error('email is invalid');
    next();
};

module.exports = { isValidUserBody, isValidUser };