const screenModel = require("../models/screen");
const scheduleModel = require("../models/schedule");
const {isNil} = require('lodash');
// This method creates a schedule for a particular multiplex screen
/**
 *
 * @param {*} request required values - screen id, multiplex id, seatsConfig, slot, from, to
 * @param {*} response
 * @returns
 */
exports.addSchedule = async(request, response) => {
    let addScheduleRequest = request.body;
    let invalidRequest = isNil(addScheduleRequest.screenId) || isNil(addScheduleRequest.multiplexId)
    || (isNil(addScheduleRequest.seatsConfig) || 0 === addScheduleRequest.seatsConfig.length);
    if(invalidRequest){
        return response.status(400).json({"error":"invalid request"})
    }
    let screenObject = await screenModel.findById(addScheduleRequest.screenId);
    let invalidScreenConfig = isNil(screenObject) || screenObject.multiplexId !== addScheduleRequest.multiplexId;
    if(invalidScreenConfig){
        return response.status(400).json({"error":"invalid screen config"})
    }
    // Check the seats config (for seat count and category) and create a config object
    let seatsAvailable=[];
    for (let index = 0; index < screenObject.seats.length; index++) {
        const element = screenObject.seats[index];
        const requestElement = addScheduleRequest.seatsConfig.find(e=> e.category == element.category);
        seatsAvailable.push({
            category:element.category,
            count: element.count,
            price: requestElement.price
        })
    }
    const schedule = await scheduleModel.create({
        multiplexId: screenObject.multiplexId,
        deleted: 0,
        screenId: addScheduleRequest.screenId,
        slot: addScheduleRequest.slot,
        seatsAvailable: seatsAvailable,
        from: addScheduleRequest.from,
        to: addScheduleRequest.to
      });
    return response.status(200).json({"message":"schedule added successfully", "data":screen});
};