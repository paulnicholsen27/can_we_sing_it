class ChangeExclusiveToBonus < ActiveRecord::Migration[6.0]
  def change
        remove_column :parts, :exclusive
        add_column :parts, :bonus, :boolean, { null: false, default: false }

  end
end
