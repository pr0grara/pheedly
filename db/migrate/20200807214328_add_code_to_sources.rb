class AddCodeToSources < ActiveRecord::Migration[5.2]
  def change
    add_column :sources, :code, :string
  end
end
