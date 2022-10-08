const {Contact} = require('../../models')

const getAll = async (req, res, next) => {
    const { _id: owner } = req.user;
    const { page=1, limit=20 } = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find({owner}, "-createdAt  -updatedAt", {skip:skip, limit:20});
    return res.json(result)
};

module.exports = getAll;