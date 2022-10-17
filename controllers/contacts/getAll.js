const {Contact} = require('../../models')

const getAll = async (req, res, next) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite } = req.query;
    console.log(favorite)
    const skip = (page - 1) * limit;
    if (favorite) {
    const result = await Contact.find({owner,favorite}, "-createdAt  -updatedAt", {skip:skip, limit:20});
    return res.json(result)
    }
    const result = await Contact.find({owner}, "-createdAt  -updatedAt", {skip:skip, limit:20});
    return res.json(result)
};

module.exports = getAll;