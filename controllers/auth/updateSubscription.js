const { User } = require("../../models");

const updateSubscription = async (req, res) => {
    const { _id } = req.user;
    console.log(_id)
     if (!req.body) {
        throw RequestError(400,"missing field subscription" )
    }
    const result = await User.findByIdAndUpdate(_id, req.body, {new:true})
    res.json(result)
}

module.exports = updateSubscription;