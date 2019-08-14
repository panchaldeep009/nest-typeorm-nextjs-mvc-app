import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get('/')
    getAll(): Promise<Task[]> {
        return this.taskService.getAll();
    }
}
