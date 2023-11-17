import { Controller, Get, Render, Req, Res } from "@nestjs/common";
import { Request , Response } from "express";
import { HomeService } from "./home.service";

@Controller('/home')
export class HomeController{
    constructor(private readonly homeService: HomeService){}

    @Get()
    @Render('index')
    showHompage(@Req() req: Request , @Res() res: Response){
        this.homeService.renderHomePage(req)
    }
}
