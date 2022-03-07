Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :tasks, only: [:index]
  # Defines the root path route ("/")
  root 'tasks#index'
end
