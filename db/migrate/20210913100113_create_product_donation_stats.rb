class CreateProductDonationStats < ActiveRecord::Migration[6.1]
  def change
    create_table :product_donation_stats do |t|
      t.float :total_amount
      t.integer :product_id, null: false
      t.timestamps
    end
  end
end
