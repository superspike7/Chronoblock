class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  include Auth
  include InertiaCsrf
  include InertiaFlash

  inertia_share auth: -> {
    {
      user: current_user.as_json(
        only: [ :id, :name ],
      )
    }
  }

end
