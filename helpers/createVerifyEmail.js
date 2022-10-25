const createVerifyEmail = (email, verificationToken) => {
    const mail = {
        to: email,
        subject: "Verification",
        html: `<a target = "_blank href = "http://localhost:3000/api/auth/users/verify/${verificationToken}">Click here</a>`
    };
    return mail;
};

module.exports = createVerifyEmail;