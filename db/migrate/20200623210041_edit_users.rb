class EditUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :sources, :api_endpoint
  end
end
