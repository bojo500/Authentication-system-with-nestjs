import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot({
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 8886,
    "username": "root",
    "password": "password",
    "database": "Auth-training",
    "synchronize": true,
    "logging": false,
    "entities": ["dist/**/*.entity{.ts,.js}"]
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
