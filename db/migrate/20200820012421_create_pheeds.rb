class CreatePheeds < ActiveRecord::Migration[5.2]
  def change
    create_table :pheeds do |t|
      t.integer :user_id, null:false
      t.string :name, null:false
      t.timestamps
    end
      add_index :pheeds, [:user_id, :name], unique:true
  end
end
