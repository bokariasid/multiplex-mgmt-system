const screenModel = require("../models/screen");
const multiplexModel = require("../models/multiplex");

exports.addMultiplex = async(request, response) => {
  const multiplex = await multiplexModel.create({
    screenCount: request.body.screenCount,
    city: request.body.city,
    deleted: 0
  });
  return response.status(200).json({"message":"Screen added successfully", "data":multiplex});
};
// In this method a screen will be added for a mulitplex.
exports.addScreen = async (request, response) => {
    let multiplexId = request.body.multiplexId;
    let seatsConfig = request.body.seatsConfig;
    let invalidRequest = null === multiplexId || undefined === multiplexId 
    || "" === multiplexId || null === seatsConfig 
    || undefined === seatsConfig || 0 === seatsConfig.length;
    if(invalidRequest){
        return response.status(400).json({
            error: "Invalid request",
          });
    }
    let multiplexRecord = await multiplexModel.findById(multiplexId);
    if(null == multiplexRecord){
        return response.status(400).json({
            error: "Invalid multiplex id",
          });
    }
    const screen = await screenModel.create({
        multiplexId: multiplexId,
        seats: seatsConfig,
        deleted: 0
      });
    return response.status(200).json({"message":"Screen added successfully", "data":screen});
};