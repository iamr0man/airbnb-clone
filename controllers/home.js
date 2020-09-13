const Home = require('../models/Home');
const User = require('../models/User');
const { validationResult } = require('express-validator')

exports.getHome = async(req, res) => {
  try {
    const home = await Home.findById(req.params.id);
    res.status(201).json(home)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

exports.createHome = async(req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  const { apartmentType, apartmentDetails, location, photos, textDetails, name } = req.body;
  try{
    const user = await User.findById(req.user.id).select('-password')
    const newHome = await Home.create({
      user: user.id,
      avatar: user.avatar,
      apartmentType,
      apartmentDetails,
      location,
      photos,
      textDetails,
      name
    });
    res.status(201).json({ newHome });
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
}

exports.updateHome = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

  const profileFields = {};
  profileFields.user = req.user.id;
  // if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.company) profileFields.company = req.body.company;
  if (req.body.website) profileFields.website = req.body.website;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.status) profileFields.status = req.body.status;
  if (req.body.githubusername)
    profileFields.githubusername = req.body.githubusername;
  if (typeof req.body.skills !== 'undefined') {
    profileFields.skills = req.body.skills.split(', ');
  }

  profileFields.social = {};
  if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

  try {
    let profile = await Profile.findOne({user: req.user.id})

    if (profile) {
      profile = await Profile.findOneAndUpdate(
          {user: req.user.id},
          {$set: profileFields},
          {new: true}
      );

      return res.json(profile)
    }

    profile = new Profile(profileFields)

    await profile.save();
    res.json(profile);

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}

exports.deleteHome = async(req, res) =>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  try{
    const home = await Home.findById(req.params.id)

    if (!home) {
        return res.status(404).json({ msg: 'Home not found' })
    }
    if (home.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' })
    }

    await home.remove()

    res.json({ msg: 'Home removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}
