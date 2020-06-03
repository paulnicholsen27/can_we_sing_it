class AddHolidayToGigs < ActiveRecord::Migration[6.0]
  def change
    add_column :gigs, :is_holiday, :boolean
  end
end
