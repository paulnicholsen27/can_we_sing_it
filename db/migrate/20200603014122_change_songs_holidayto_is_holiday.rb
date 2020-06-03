class ChangeSongsHolidaytoIsHoliday < ActiveRecord::Migration[6.0]
  def change
    rename_column :songs, :holiday, :is_holiday
  end
end
