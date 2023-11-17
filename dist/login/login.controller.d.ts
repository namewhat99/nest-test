import { LoginService } from "./login.service";
export declare class loginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    renderLoginPage(req: Request, res: Response): void;
    OAuthController(req: Request, res: Response, auth_code: String): void;
    getUserController(req: Request, res: Response, email: String): void;
}
