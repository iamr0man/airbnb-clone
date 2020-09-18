const Home = require('../models/Home');
const User = require('../models/user');
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

  const { apartmentType, apartmentRoomsDetails, location, photos, textDetails, name, pricePerNight } = req.body;
  try{
    const user = await User.findById(req.body.user).select('-password')
    const newHome = await Home.create({
      user: user.id,
      name,
      pricePerNight,
      apartmentType,
      apartmentRoomsDetails,
      location,
      photos,
      textDetails,
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

  const { apartmentType, apartmentRoomsDetails, location, photos, textDetails, name, pricePerNight } = req.body;

  const homeFields = {};
  // homeFields.user = req.user.id;
  if (name) homeFields.name = req.body.name;
  if (location) homeFields.location = req.body.location;
  if (photos) homeFields.photos = req.body.photos;
  if (apartmentType) homeFields.apartmentType = req.body.apartmentType;
  if (apartmentRoomsDetails) homeFields.apartmentRoomsDetails = req.body.apartmentRoomsDetails;
  if (textDetails) homeFields.textDetails = req.body.textDetails;
  if (pricePerNight) homeFields.pricePerNight = req.body.pricePerNight;

  try {
    // TODO req.user.id
    let home = await Home.findOne({ user: req.body.user })

    if (!home) {
      return res.status(404).json({ msg: 'Home not found' })
    }

    home = await Home.findOneAndUpdate(
      {user: req.body.user},
      {$set: homeFields},
      {new: true}
    );

    res.json(home)

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
