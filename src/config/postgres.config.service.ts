import { TypeOrmOptionsFactory } from "@nestjs/typeorm";

export class PostgresConfigService implements TypeOrmOptionsFactory{
    public createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: '',
            host: '',
            port: '',
            username: '',
            password: '',
            database: '',
        }
    }
}