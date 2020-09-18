const Pick = require('../models/Pick');
const User = require('../models/user');

export const getPick = async(req, res) => {
  try {
    const pick = await Pick.find({}).sort({ regDate: -1 });
    res.status(201).json(pick[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

export const createPick = async(req, res) => {

  const { discover, city, museum } = req.body;
  try{
    const newPick = await Pick.create({
      // admin: req.user.id
      discover,
      city,
      museum,
    });
    res.status(201).json(newPick);
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
}

export const updatePick = async (req, res) => {

  const { discover, city, museum } = req.body;

  const pickFields: any = {};
  // pickFields.user = req.user.id;
  if (discover) pickFields.discover = req.body.discover;
  if (city) pickFields.city = req.body.city;
  if (museum) pickFields.museum = req.body.museum;

  try {
    // TODO req.user.id
    let pick = await Pick.findOne({ admin: req.body.user })

    // TODO req.user.id
    // if (pick.admin.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'You are not admin, sorry' })
    // }

    // if (!pick) {
    //   return res.status(404).json({ msg: 'Pick not found' })
    // }

    // TODO req.user.id
    // pick = await Pick.findOneAndUpdate(
    //   {admin: req.user.id},
    //   {$set: pickFields},
    //   {new: true}
    // );

    res.json(pick)

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}

export const deletePick = async(req, res) =>{

  try{
    const pick = await Pick.findById(req.params.id)

    if (!pick) {
        return res.status(404).json({ msg: 'Pick not found' })
    }
    if (pick.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' })
    }

    await pick.remove()

    res.json({ msg: 'Pick removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}
