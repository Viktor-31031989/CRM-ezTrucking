import {SequelizeModuleOptions} from '@nestjs/sequelize'


export const sequelizeConfig: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'ezTrucking',
    models: [],
    autoLoadModels: true
}
