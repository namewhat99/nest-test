import { Request, Response } from "express";
import { HomeService } from "./home.service";
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    showHompage(req: Request, res: Response): void;
}
