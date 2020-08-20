class Edit < ActiveRecord::Migration[5.2]
  def change
    add_column :feeds, :pheed_id, :integer
  end
end
