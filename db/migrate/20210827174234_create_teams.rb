class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.timestamp :created_at
      t.timestamp :updated_at

      t.timestamps
    end
  end
end
