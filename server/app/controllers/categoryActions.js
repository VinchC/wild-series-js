const tables = require("../../database/tables");

const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();

  res.json(categoriesFromDB);
};

const read = async (req, res) => {
  const categoryFromDB = await tables.category.read(req.params.id);

  if (categoryFromDB != null) {
    res.json(categoryFromDB);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

module.exports = { browse, read };
