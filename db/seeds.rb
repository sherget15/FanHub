# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.destroy_all
Team.destroy_all
User.destroy_all

@admin = User.create!(username: 'pokemon', email: 'pokemon@email.com', password: 'pikachu')

puts "#{User.count} users created"

10.times do 
  Team.create!(name: Faker::Team.name, user: @admin)
end

puts "#{Team.count} teams created"

Player.create!(name: 'Ronald Acuna Jr.')
Player.create!(name: 'Travis Darnaud')
Player.create!(name: 'Freddie Freeman')
Player.create!(name: 'Ozzie Albies')
Player.create!(name: 'Dansby Swanson')
Player.create!(name: 'Austin Riley')
Player.create!(name: 'Tucci Toussiant')
Player.create!(name: 'Adam Duvall')
Player.create!(name: 'Jorge Soler')
Player.create!(name: 'Joc Pederson')


puts "#{Player.count} players created"

Team.all.each do |team|
  rand(1..10).times do 
    team.players << Player.all.sample
  end
end