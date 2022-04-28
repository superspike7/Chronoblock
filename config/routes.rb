Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :tasks, only: %i[index create update]
  resources :schedules, only: %i[index show]
  # Defines the root path route ("/")
  root 'schedules#show'
end
