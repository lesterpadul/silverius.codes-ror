class CreateUserDonationStats < ActiveRecord::Migration[6.1]
  def change
    create_table :user_donation_stats do |t|
      t.float :amount
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
