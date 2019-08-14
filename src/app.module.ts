import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TaskModule } from './task/task.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_local_test_nest',
            entities: [join(__dirname, '**/**.entity{.ts,.js}')],
            synchronize: true,
        }),
        TaskModule,
    ],
})
export class ApplicationModule { }
