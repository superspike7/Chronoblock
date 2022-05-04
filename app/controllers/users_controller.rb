class UsersController < ApplicationController
  def destroy
    @user = current_user
    sign_out @user
    render inertia: 'Auth/Login', props: {}
  end

  private

  def user_params
    params.permit(:id, :user)
  end
end
