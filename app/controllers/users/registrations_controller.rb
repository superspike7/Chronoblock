class Users::RegistrationsController < Devise::RegistrationsController
  def new
    render inertia: 'Auth/Register', props: {}
  end

  def create 
    super do |resource|
      # raise
      unless resource.persisted?
        clean_up_passwords resource
        set_minimum_password_length
        session[:errors] = resource.errors.messages
        redirect_to new_user_registration_path, inertia: { errors: resource.errors.messages }
        return
      end
    end
  end

  def destroy 
    super
  end
end
