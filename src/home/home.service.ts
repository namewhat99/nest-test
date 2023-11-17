import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class HomeService{

    renderHomePage(req : Request){
        console.log(req)
    }
}

