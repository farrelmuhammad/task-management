/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: async () => {
        return {
          hello: 'ho',
        }
      }
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    AuthModule,
  ],
})
export class AppModule {}
