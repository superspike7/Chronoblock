class SchedulesController < ApplicationController
  def index
    render inertia: 'Calendar'
  end

  def show
    render inertia: 'Schedule'
  end
end
