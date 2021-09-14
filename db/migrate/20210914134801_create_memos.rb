class CreateMemos < ActiveRecord::Migration[6.1]
  def change
    create_table :memos do |t|
      t.integer :admin_id
      t.integer :product_id
      t.string :content

      t.timestamps
    end
    add_index :memos, :admin_id
    add_index :memos, :product_id
  end
end
