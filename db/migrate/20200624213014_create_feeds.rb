class CreateFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :feeds do |t|
      t.integer :user_id, null:false
      t.integer :source_id, null:false
      t.timestamps
    end
      add_index :feeds, [:user_id, :source_id], unique:true
  end
end
