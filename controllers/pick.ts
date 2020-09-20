import {Pick} from '../models/pick'
import {BadRequest, Unauthorized} from "../errors";

export const getPick = async(req, res) => {
    const pick = await Pick.find({}).sort({ regDate: -1 });
    res.status(201).json(pick[0])
}

export const createPick = async(req, res) => {

  const { discover, city, museum } = req.body;

  // @ts-ignore
  const newPick = await Pick.create({
    admin: req.session!.userId,
    discover,
    city,
    museum,
  });
  res.status(201).json(newPick);
}

export const updatePick = async (req, res) => {

  const { discover, city, museum } = req.body;

  const pickFields: any = {};

  pickFields.admin = req.session!.userId;
  if (discover) pickFields.discover = req.body.discover;
  if (city) pickFields.city = req.body.city;
  if (museum) pickFields.museum = req.body.museum;

  let pick = await Pick.findOne({ admin: req.session!.userId })

  if (pick.admin.toString() !== req.session!.userId) {
    return new Unauthorized('You are not admin, sorry')
  }

  if (!pick) {
    return new BadRequest('Pick not found')
  }

  pick = await Pick.findOneAndUpdate(
    {admin: req.session!.userId},
    {$set: pickFields},
    {new: true}
  );

  res.json(pick)
}

export const deletePick = async(req, res) =>{

  const pick = await Pick.findById(req.params.id)

  if (!pick) {
      return new BadRequest('Pick not found')
  }
  if (pick.admin.toString() !== req.session!.userId) {
      return new Unauthorized('User not authorized')
  }

  await pick.remove()

  res.json({ msg: 'Pick removed' })
}
