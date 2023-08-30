import { Request, Response } from "express";

export async function postSurvey(req: Request, res: Response) {
    console.log(req);
  res.status(200).send("Thank you!");
}
