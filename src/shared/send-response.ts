import type { IAPIResponse } from "@interfaces/send-response.js";
import type { Response } from "express";


const sendResponse = (res: Response, resData: IAPIResponse): void => {
  res.status(resData.statusCode).json({
    success: resData.success,
    message: resData.message,
    meta: resData.meta || null,
    data: resData.data || null,
  });
};

export default sendResponse;
