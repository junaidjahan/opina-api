import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'opina',
      entities: [User],
      synchronize: true
      
    }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
