Rails.application.routes.draw do
  resources :players, only: :index 
  resources :teams
  # post '/auth/login', to: 'authentication#login'
  # get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create 
  get '/teams/:team_id/players/:id', to: 'players#add_to_team'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
