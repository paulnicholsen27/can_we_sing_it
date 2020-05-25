class CreateParts < ActiveRecord::Migration[6.0]
  def change
    create_table :parts do |t|
      t.string :name
      t.integer :song_id
      t.boolean :exclusive
      t.boolean :solo

      t.timestamps
    end
  end
end
