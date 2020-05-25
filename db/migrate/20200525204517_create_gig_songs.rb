class CreateGigSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :gig_songs do |t|
      t.integer :gig_id
      t.integer :song_id

      t.timestamps
    end
  end
end
