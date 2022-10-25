const { RequestError } = require("../../helpers");
const { User } = require("../../models");


const verify = async (req, res) => {
  
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken })
    
    if (!user) {
        throw RequestError(404, 'User not found')
    }
    await User.findByIdAndUpdate(user._id, { verificationToken: null, verify: true })
    res.status(200).json({
        message: 'Verification successful',
    })
};

module.exports = verify;