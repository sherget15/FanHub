class Team < ApplicationRecord
  has_and_belongs_to_many :players 
  belongs_to :user 
end
