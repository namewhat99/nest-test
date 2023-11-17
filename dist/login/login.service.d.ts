import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
export declare class LoginService {
    private userModel;
    constructor(userModel: Model<User>);
    renderLoginPage(req: Request, res: Response): void;
    executeOAuth(req: Request, res: Response, auth_code: String): Promise<void>;
    getToken(req: Request, res: Response, auth_code: String): Promise<any>;
    getUserInfo(req: Request, res: Response, access_token: String): Promise<any>;
    getUser(req: Request, res: Response, email: String): Promise<void>;
    saveUser(req: Request, res: Response, userInfo: any): Promise<void>;
}
