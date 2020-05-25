class CreateGigSingers < ActiveRecord::Migration[6.0]
  def change
    create_table :gig_singers do |t|
      t.integer :gig_id
      t.integer :singer_id

      t.timestamps
    end
  end
end
