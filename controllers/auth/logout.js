const { User } = require('../../models');

const logout = async (req, res) => {
    const { _id } = req.user;
    console.log('try')
    await User.findByIdAndUpdate(_id, { token: null })
    res.status(204).json();
   
}

module.exports = logout;