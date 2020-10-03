import {Request, User} from '../models/'
import {BadRequest, Unauthorized} from "../errors";

export const getRequest = async(req, res) => {
    // @ts-ignore
    const allRequests = await Request.find({ host_id: req.session!.userId}).populate('guest_id').then((user: User) => {
        return user;
    })
    res.status(201).json(allRequests)
}

export const createRequest = async(req, res) => {
    const { host_id, home, status, date, guests, money, isCounted } = req.body;

    // @ts-ignore
    const newRequest = await Request.create({
        host_id,
        home,
        guest_id: req.session!.userId,
        status,
        date,
        guests,
        isCounted,
        money
    })
    res.status(201).json(newRequest);
}

export const updateRequest = async (req, res) => {

    const { status, date, guests, money, isCounted } = req.body;

    const requestFields: any = {};

    if(status) { requestFields.status = status}
    if(date) { requestFields.date = date}
    if(guests) { requestFields.guests = guests}
    if(money) { requestFields.money = money}
    if(isCounted) { requestFields.isCounted = isCounted}

    let request = await Request.findById(req.params.id)

    if (!request) {
        return new BadRequest('Request not found')
    }

    request = await Request.findByIdAndUpdate(
         req.params.id,
        {$set: requestFields},
        {new: true}
    );

    res.json(request)
}

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
