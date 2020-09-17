class AddBlurbToSources < ActiveRecord::Migration[5.2]
  def change
    add_column :sources, :blurb, :string
  end
end
