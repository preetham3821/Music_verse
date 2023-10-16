require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlCatalogue = require('../controllers/songs');
var ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlCatalogue.homelist);
router.get('/songs/review/new', ctrlCatalogue.addReview);
router.get('/songs/I-Wanna-Be-Yours', ctrlCatalogue.songsInfo1); 
router.get('/songs/Starboy', ctrlCatalogue.songsInfo2); 
router.get('/songs/Levitating', ctrlCatalogue.songsInfo3); 
router.get('/songs/Sunflower-Spider-Man:-Into-the-Spider-Verse', ctrlCatalogue.songsInfo4); 
router.get('/songs/songs-catalogue', ctrlCatalogue.catalogue);
router.post('/songs/review/new', ctrlCatalogue.addReview_post);

/* Other pages */

router.get('/about', ctrlOthers.about);
router.get('/signin',ctrlOthers.signin);
router.post('/signin', ctrlOthers.signin_post);
router.get('/register',ctrlOthers.register);
router.post('/register',ctrlOthers.register_post);

module.exports = router;