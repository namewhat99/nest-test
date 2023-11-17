"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
let loginController = class loginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    renderLoginPage(req, res) {
        this.loginService.renderLoginPage(req, res);
    }
    OAuthController(req, res, auth_code) {
        this.loginService.executeOAuth(req, res, auth_code);
    }
    getUserController(req, res, email) {
        this.loginService.getUser(req, res, email);
    }
};
exports.loginController = loginController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("login"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Response]),
    __metadata("design:returntype", void 0)
], loginController.prototype, "renderLoginPage", null);
__decorate([
    (0, common_1.Get)("oauth"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Query)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        Response,
        String]),
    __metadata("design:returntype", void 0)
], loginController.prototype, "OAuthController", null);
__decorate([
    (0, common_1.Get)("user"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Query)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        Response,
        String]),
    __metadata("design:returntype", void 0)
], loginController.prototype, "getUserController", null);
exports.loginController = loginController = __decorate([
    (0, common_1.Controller)("/login"),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], loginController);
//# sourceMappingURL=login.controller.js.map