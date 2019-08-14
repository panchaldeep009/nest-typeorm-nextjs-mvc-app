import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepo: Repository<Task>,
    ) { }

    /* To Get all tasks */
    async getAll(): Promise<Task[]> {
        return await this.taskRepo.find();
    }

    /* To add new task */
    async addTask(task: Task['task']): Promise<Task> {
        const newTask = new Task();
        newTask.task = task;
        await this.taskRepo.save(newTask);
        return newTask;
    }

    /* To Update Task */
    async editTask(id: Task['id'], task: Task['task']): Promise<Task> {
        await this.taskRepo.update({ id }, {
            task,
        });
        return this.taskRepo.findOne(id);
    }

    /* To delete Task */
    async deteleTask(id: Task['id']): Promise<void> {
        await this.taskRepo.delete({ id });
    }
}
