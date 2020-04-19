var express = require('express'),
router = express.Router();
const albumCtrl = require('./album-controller');

router.post('/albums', albumCtrl.createAlbum);
router.get('/albums', albumCtrl.getAlbums);
router.get('/albums/:id', albumCtrl.getAlbum);
router.delete('/albums/:id', albumCtrl.deleteAlbum);
router.put('/albums/:id', albumCtrl.updateAlbum);
router.get('/', albumCtrl.getpage);

module.exports = router;