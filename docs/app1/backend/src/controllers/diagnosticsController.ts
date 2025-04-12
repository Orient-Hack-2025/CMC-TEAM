import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import calculateSelfEsteemResult from "../services/selfEsteemService";
import calculatePressionResult from "../services/pressionService";
import { calculateFutureStressResult } from "../services/futureStress";
import { calculateExamscore } from "../services/examStress";
import calculateSinceerAnxiatyResult from "../services/sinceerAnxiatyService";
import calculerScore from "../services/raisecService";
import calculateOceanResult from "../services/oceanSevice";
import calculateInternetAddictionResult from "../services/internetAdictionService";
import ApiResponse from "../utils/apiResponse";
import calculateBeckDepressionResult from "../services/BeckService";
import { User } from "../models/userModel";

const diagController = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { diagName } = req.params;
    const data = req.body;

    switch (diagName) {
        case 'beckDepression':
            res.status(200).send(new ApiResponse(200, calculateBeckDepressionResult(data)));
            return;

        case 'elfEsteem':
            res.status(200).send(new ApiResponse(200, calculateSelfEsteemResult(data)));
            return;

        case 'pression':
            res.status(200).send(new ApiResponse(200, calculatePressionResult(data)));
            return;

        case 'examStress':
            res.status(200).send(new ApiResponse(200, calculateExamscore(data)));
            return;

        case 'futureStress':
            res.status(200).send(new ApiResponse(200, calculateFutureStressResult(data)));
            return;

        case 'sincerAnxiaty':
            res.status(200).send(new ApiResponse(200, calculateSinceerAnxiatyResult(data)));
            return;

        case 'raisec':
            const user = req.user;
            console.log(user)
            const exitingUser = await User.findOne({ _id: user.id});
            const result = calculerScore(data);
            exitingUser.riasec = result;
            exitingUser.save();
            res.status(200).send(new ApiResponse(200, result));
            return;

        case 'ocean':
            res.status(200).send(new ApiResponse(200, calculateOceanResult(data)));
            return;

        case 'internetAdiction':
            res.status(200).send(new ApiResponse(200, calculateInternetAddictionResult(data)));
            return;

        default:
            res.status(400).send(new ApiResponse(400, null, "Unknown diagnostic name"));
            return;
    }
});

export default diagController;
