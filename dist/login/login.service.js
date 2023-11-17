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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LoginService = class LoginService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    renderLoginPage(req, res) {
        console.log(req.headers);
    }
    async executeOAuth(req, res, auth_code) {
        const { access_token, refresh_token, token_type, expires_in } = await this.getToken(req, res, auth_code);
        const userInfo = await this.getUserInfo(req, res, access_token);
        await this.getUser(req, res, userInfo.email);
    }
    async getToken(req, res, auth_code) {
        const tokenResponse = await fetch(`https://nid.naver.com/oauth2.0/token?client_id=XIzQyL6Jt9Xcl5tbCdlg&client_secret=7ymILXLJnJ&grant_type=authorization_code&state=RANDOM_ACCESS&code=${auth_code}`);
        const tokenJson = await tokenResponse.json();
        return tokenJson;
    }
    async getUserInfo(req, res, access_token) {
        const userInfoResponse = await fetch('https://openapi.naver.com/v1/nid/me', {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const userInfoJson = await userInfoResponse.json();
        return userInfoJson.response;
    }
    async getUser(req, res, email) {
        const users = await this.userModel.find().exec();
        console.log(users);
    }
    async saveUser(req, res, userInfo) {
        const user = new this.userModel(userInfo);
        console.log(user);
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LoginService);
//# sourceMappingURL=login.service.js.map