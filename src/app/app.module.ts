import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HomeModule } from "src/home/home.module";
import { LoginModule } from "src/login/login.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://Cluster92338:Cluster92338@cluster0.8xycg3k.mongodb.net/?retryWrites=true'),
    // mongoose.connect 와 같은 역할, 해당 URL 의 mongoDB 와 연결한다, appModule 에서 사용가능
    HomeModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
