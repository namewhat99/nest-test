import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";

@Injectable()
export class LoginService{

    constructor(@InjectModel('User') private userModel : Model<User>){
    }
    // User 라는 이름의 모델을 사용

    renderLoginPage(req : Request , res: Response){
        console.log(req.headers)
    }

    async executeOAuth(req : Request , res: Response, auth_code: String){

        const {access_token , refresh_token, token_type , expires_in} = await this.getToken(req , res , auth_code)
        const userInfo = await this.getUserInfo(req , res , access_token)
        
        await this.getUser(req , res , userInfo.email)
        //await this.saveUser(req , res , {name : userInfo.name , email : userInfo.email , access_token : access_token , refresh_token : refresh_token})
    }

    async getToken(req : Request , res: Response , auth_code : String){

        const tokenResponse = await fetch(`https://nid.naver.com/oauth2.0/token?client_id=XIzQyL6Jt9Xcl5tbCdlg&client_secret=7ymILXLJnJ&grant_type=authorization_code&state=RANDOM_ACCESS&code=${auth_code}`)
        const tokenJson = await tokenResponse.json();
        return tokenJson;
    }

    async getUserInfo(req : Request , res: Response , access_token : String){

        const userInfoResponse = await fetch('https://openapi.naver.com/v1/nid/me' , {
            headers : {
                Authorization : `Bearer ${access_token}`
            }
        })
        const userInfoJson = await userInfoResponse.json();
        return userInfoJson.response;
    }

    async getUser(req : Request , res: Response , email : String){

        const users = await this.userModel.find().exec(); // User 모델의 모든 document를 가져옴

        console.log(users)

    }

    async saveUser(req : Request , res: Response , userInfo : any){
        
        const user = new this.userModel(userInfo) // User 모델을 이용해 새로운 user document 생성

        user.save()
    }
    
}