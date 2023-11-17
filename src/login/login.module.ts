import { Module } from '@nestjs/common';
import { loginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';


@Module({
    imports: [MongooseModule.forFeature([{name : 'User' , schema : UserSchema}])],
    // User 라는 이름의 모델을 사용, Userschema 적용
    controllers: [loginController],
    providers: [LoginService],
})

export class LoginModule{}


