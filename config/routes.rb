Rails.application.routes.draw do
  resources :users
  resources :players
  resources :teams
  get '/teams/:team_id/players/:id', to: 'players#add_to_team'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
