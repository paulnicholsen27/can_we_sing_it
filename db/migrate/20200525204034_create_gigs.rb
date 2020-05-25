class CreateGigs < ActiveRecord::Migration[6.0]
  def change
    create_table :gigs do |t|
      t.string :name
      t.string :notes
      t.datetime :start_time

      t.timestamps
    end
  end
end
