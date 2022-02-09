const path = require('path');
const router = require('express').Router;



// The empty path- ('/') -is used to braing us to the root route of the server.
// It creates the homepage of the server.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepr-public/index.html'));
});

router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepr-public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepr-public/zookeepers.html'));
});
// The wildcard route should always be last or it will take precedence over any 
// named route that comes after it.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepr-public/index.html'));
});



module.exports = router;






