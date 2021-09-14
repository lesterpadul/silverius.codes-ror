class AddAirlineIdToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :airline_id, :bigint
    add_index :reviews, :airline_id
  end
end
