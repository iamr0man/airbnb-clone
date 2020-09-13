const Expe = require('../models/ExpeEntry');
const User = require('../models/User');
const { validationResult } = require('express-validator')

exports.getAllPoints = async(req, res) => {
  try{
    const points = await Expe.find();
    res.status(201).json(points)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

exports.createPoint = async(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  console.log("work in ready");
  const { latitude, longitude, title, description, emoji } = req.body;
  try{
      const user = await User.findById(req.user.id).select('-password') 
      console.log(user);
      const newExpe = await Expe.create({
        user: user.id,
        latitude,
        longitude,
        title,
        description,
        emoji
      });
      console.log(newExpe);
      res.json({ newExpe });
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
}

exports.likeExpe = async (req, res) => {
  try {
      const expe = await Expe.findById(req.params.id)

      if (expe.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
          return res.status(400).json({ msg: 'Expe already liked' })
      }

      expe.likes.unshift({ user: req.user.id })

      await expe.save();

      res.json(expe.likes)
  } catch (error) {
      console.error(err.message)
      res.status(500).send('Server error')
  }
}

exports.unlikeExpe = async (req, res) => {
  try {
      const expe = await Expe.findOne({ _id: req.params.id })

      if (expe.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
          return res.status(400).json({ msg: 'Expe has not been liked' })
      }

      const removeIndex = expe.likes.map(like => like.user.toString()).indexOf(req.user.id);

      expe.likes.splice(removeIndex, 1)

      await expe.save();

      res.json(expe.likes)
  } catch (error) {
      console.error(err.message)
      res.status(500).send('Server error')
  }
}

exports.deletePoint = async(req, res) =>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  try{
    const expe = await Expe.findById(req.params.id)

    if (!expe) {
        return res.status(404).json({ msg: 'Expe not found' })
    }
    if (expe.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' })
    }

    await expe.remove()

    res.json({ msg: 'Expe removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}