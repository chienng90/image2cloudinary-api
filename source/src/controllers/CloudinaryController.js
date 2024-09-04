import cloudinary from 'cloudinary';
import config from '../config/CapstoneConfig.js';
import sendResponse from '../utils/ResponseHelper.js';
import httpStatus from 'http-status';

cloudinary.v2.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
});

const generateSignature = async (req, res, next) => {
    try {
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const signature = cloudinary.v2.utils.api_sign_request({
            timestamp,
        }, config.cloudinary.apiSecret);
        sendResponse(httpStatus.OK, "success", { signature, timestamp }, res);
    } catch (error) {
        next(error);
    }
}

export {
    generateSignature
}