class TasksController < ApplicationController
  def index
    render inertia: 'Tasks', props: {
      tasks: Task.all.map do |task|
        task.as_json(only: %i[id title status task_type task_start task_end])
      end
    }
  end

  def create
    Task.create(task_params)

    redirect_to tasks_path
  end

  def update
    task = Task.find(params[:id])
    task.update(task_params)

    redirect_to tasks_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :task_end, :task_start, :task_type, :status)
  end
end
