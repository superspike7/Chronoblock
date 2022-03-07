class TasksController < ApplicationController
  def index
    render inertia: 'Tasks'
  end
end
