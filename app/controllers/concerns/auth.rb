require 'active_support/concern'

module Auth
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

    # rescue_from CanCan::AccessDenied do
    #   render inertia: 'Error', props: {
    #     status: 403
    #   }
    # end
  end

  private

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  def after_sign_out_path_for(_resource_or_scope)
    new_user_session_path
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
