class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :team_name
      t.string :position
      t.timestamp :created_at
      t.timestamp :updated_at

      t.timestamps
    end
  end
end
