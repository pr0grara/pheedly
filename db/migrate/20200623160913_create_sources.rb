class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
      t.string :name, null:false, uniqueness:true
      t.string :api_endpoint, null:false
      t.timestamps
    end

    add_index :sources, :name
  end
end
