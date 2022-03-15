class TasksController < ApplicationController
  def index
    render inertia: 'Tasks', props: {
      tasks: Task.all.map do |task|
        task.as_json(only: %i[id title status task_type schedule])
      end
    }
  end

  def create
    Task.create(task_params)

    redirect_to tasks_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :schedule, :task_type)
  end
end
