class CreateSingerParts < ActiveRecord::Migration[6.0]
  def change
    create_table :singer_parts do |t|
      t.integer :singer_id
      t.integer :part_id

      t.timestamps
    end
  end
end
