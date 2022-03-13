class TasksController < ApplicationController
  def index
    render inertia: 'Tasks', props: { 
      tasks: Task.all.map do |task|
        task.as_json(only: [:id, :title, :status, :task_type, :schedule])
      end
    }
  end

  def create
  end

end
