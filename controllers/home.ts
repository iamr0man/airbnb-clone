import { Home, User } from '../models'

export const getHome = async(req, res) => {
  const home = await Home.findById(req.params.id);
  res.status(201).json(home)
}

export const createHome = async(req, res) => {
  const { apartmentType, apartmentRoomsDetails, location, photos, textDetails, name, pricePerNight } = req.body;
  const user = await User.findById(req.session!.userId).select('-password')
  //@ts-ignore
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
  res.status(201).json(newHome);
}

export const updateHome = async (req, res) => {
  const { apartmentType, apartmentRoomsDetails, location, photos, textDetails, name, pricePerNight, bookedDate } = req.body;
  console.log(req.body)
  const homeFields: any = {};
  // homeFields.user = req.user.id;
  if (name) homeFields.name = req.body.name;
  if (location) homeFields.location = req.body.location;
  if (photos) homeFields.photos = req.body.photos;
  if (apartmentType) homeFields.apartmentType = req.body.apartmentType;
  if (apartmentRoomsDetails) homeFields.apartmentRoomsDetails = req.body.apartmentRoomsDetails;
  if (textDetails) homeFields.textDetails = req.body.textDetails;
  if (pricePerNight) homeFields.pricePerNight = req.body.pricePerNight;
  if (bookedDate) homeFields.bookedDate = req.body.bookedDate;

  let home = await Home.findOne({ user: req.session!.userId })

  if (!home) {
    return res.status(404).json({ msg: 'Home not found' })
  }
  console.log(homeFields)
  home = await Home.findOneAndUpdate(
    {_id: req.params.id },
    {$set: homeFields},
    {new: true}
  );

  res.json(home)
}

export const deleteHome = async(req, res) =>{

  const home = await Home.findById(req.params.id)

  if (!home) {
      return res.status(404).json({ msg: 'Home not found' })
  }
  if (home.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' })
  }

  await home.remove()

  res.json({ msg: 'Home removed' })
}
