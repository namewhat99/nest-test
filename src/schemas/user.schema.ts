import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User{

    @Prop()
    name : string;

    @Prop()
    email : string;

    @Prop()
    access_token : string;

    @Prop()
    refresh_token : string;
}

export const UserSchema = SchemaFactory.createForClass(User);
// mongoose.schema() 와 같은 역할 -> 해당 스키마를 사용