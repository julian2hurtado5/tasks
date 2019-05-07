class Api::V1::TasksController < ApplicationController
    def index
        @tasks = Task1.all
        render json:@tasks.as_json()
    end

    def create        
        task = Task1.new(task_params)
        
        if task.save
            render json:task.as_json()
        else
            render json: {errors: task.errors}.as_json()
        end
        
    end

    def show
        @task = Task1.find(params[:id])
        render json:@task.as_json()
    end

    def update
        task = Task1.find(params[:id])
        
        if (task.update(task_params))
            render json:task.as_json()
        else
            render json: {errors: task.errors}.as_json()
        end
        
    end

    def destroy
        task = Task1.find(params[:id])
        task.destroy
        render json:task.as_json()
    end

    private 
    def task_params
        params.require(:task).permit(:done, :description)
    end
end
