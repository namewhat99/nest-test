import { Controller, Get, Query, Render, Req, Res } from "@nestjs/common";
import { LoginService } from "./login.service";

@Controller("/login")
export class loginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  @Render("login")
  renderLoginPage(@Req() req: Request, @Res() res: Response) {
    this.loginService.renderLoginPage(req, res);
  }

  @Get("oauth")
  OAuthController(
    @Req() req: Request,
    @Res() res: Response,
    @Query("code") auth_code: String
  ) {
    this.loginService.executeOAuth(req, res, auth_code);
  }

  @Get("user")
  getUserController(
    @Req() req: Request,
    @Res() res: Response,
    @Query("email") email: String
  ) {
    this.loginService.getUser(req, res, email);
  }
}
