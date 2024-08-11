const db = require('../config/db');

// Get banner details
exports.getBanner = (req, res) => {
    console.log("banner")
  db.query('SELECT * FROM banner WHERE id = 1', (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

// Update banner details
exports.updateBanner = (req, res) => {
  const { description, timer, link, is_visible } = req.body;
  db.query(
    'UPDATE banner SET description = ?, timer = ?, link = ?, is_visible = ? WHERE id = 1',
    [description, timer, link, is_visible],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Banner updated successfully' });
    }
  );
};
