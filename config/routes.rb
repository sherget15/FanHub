Rails.application.routes.draw do
  resources :players
  resources :teams
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create 
  get '/teams/:team_id/players/:player_id', to: 'players#add_to_team'
  # get '/players/:player_id'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
