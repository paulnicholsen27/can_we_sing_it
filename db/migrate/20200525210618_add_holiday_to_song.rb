class AddHolidayToSong < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :holiday, :boolean
  end
end
