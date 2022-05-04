Rails.application.routes.draw do
  defaults export: true do
    devise_for :users, skip: [:sessions, :registrations]
    as :user do
      get 'login', to: 'users/sessions#new', as: :new_user_session
      post 'login', to: 'users/sessions#create', as: :user_session
      match 'logout', to: 'users/sessions#destroy', as: :destroy_user_session, via: Devise.mappings[:user].sign_out_via
    end
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    resources :tasks, only: %i[index create update]
    resources :schedules, only: %i[index show]
    # Defines the root path route ("/")
    root 'schedules#show'
  end
end
