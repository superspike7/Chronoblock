class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  include InertiaCsrf
  include Auth

  inertia_share auth: -> {
    {
      user: current_user.as_json(
        only: [ :id, :name ],
      )
    }
  }

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
