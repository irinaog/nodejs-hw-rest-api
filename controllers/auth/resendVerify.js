const { RequestError,createVerifyEmail, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");

const resendVerify = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
       throw RequestError(400) 
    }
    if (user.verify) {
    res.statue(400).json({ message: "Verification has already been passed"})
}

    const mail = createVerifyEmail(email, user.verificationToken)
    await sendEmail(mail); 
    
    res.json({
        message: "Verification email sent"
    })

}

module.exports = resendVerify;