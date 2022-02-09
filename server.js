const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public/zookeepr-public'));
// Both the following middleware functions are needed for any server that will
// POST data.
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());





// The empty path- ('/') -is used to braing us to the root route of the server.
// It creates the homepage of the server.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepr-public/index.html'));
});

app.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepr-public/animals.html'));
});

app.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepr-public/zookeepers.html'));
});
// The wildcard route should always be last or it will take precedence over any 
// named route that comes after it.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepr-public/index.html'));
});



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
