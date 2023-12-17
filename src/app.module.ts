import {Module} from '@nestjs/common'
import {SequelizeModule} from '@nestjs/sequelize'
import {sequelizeConfig} from "./config/sequelizeConfig";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
       SequelizeModule.forRoot(sequelizeConfig),
       UsersModule,
    ]
})

export class AppModule {
}
