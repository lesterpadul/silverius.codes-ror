class CreateDonators < ActiveRecord::Migration[6.1]
  def change
    create_table :donators do |t|
      t.float :amount
      t.integer :user_id
      t.integer :product_id

      t.timestamps
    end
  end
end
