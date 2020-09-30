import {Request, User} from '../models/'
import {BadRequest, Unauthorized} from "../errors";

export const getRequest = async(req, res) => {
    // @ts-ignore
    console.log(req.session)
    console.log(await Request.find({ host_id: req.session!.userId}))
    // @ts-ignore
    const allRequests = await Request.find({ host_id: req.session!.userId}).populate('guest_id').then((user: User) => {
        return user;
    })
    res.status(201).json(allRequests)
}

export const createRequest = async(req, res) => {
    const { host_id, home, date, guests, money } = req.body;

    // @ts-ignore
    const newRequest = await Request.create({
        host_id,
        home,
        guest_id: req.session!.userId,
        date,
        guests,
        money
    })
    res.status(201).json(newRequest);
}

// export const updateRequest = async (req, res) => {
//
//     const { discover, city, museum } = req.body;
//
//     const pickFields: any = {};
//
//     pickFields.admin = req.session!.userId;
//     if (discover) pickFields.discover = req.body.discover;
//     if (city) pickFields.city = req.body.city;
//     if (museum) pickFields.museum = req.body.museum;
//
//     let pick = await Request.findOne({ admin: req.session!.userId })
//
//     if (pick.admin.toString() !== req.session!.userId) {
//         return new Unauthorized('You are not admin, sorry')
//     }
//
//     if (!pick) {
//         return new BadRequest('Request not found')
//     }
//
//     pick = await Request.findOneAndUpdate(
//         {admin: req.session!.userId},
//         {$set: pickFields},
//         {new: true}
//     );
//
//     res.json(pick)
// }

// export const deletePick = async(req, res) =>{
//
//     const pick = await Pick.findById(req.params.id)
//
//     if (!pick) {
//         return new BadRequest('Pick not found')
//     }
//     if (pick.admin.toString() !== req.session!.userId) {
//         return new Unauthorized('User not authorized')
//     }
//
//     await pick.remove()
//
//     res.json({ msg: 'Pick removed' })
// }
