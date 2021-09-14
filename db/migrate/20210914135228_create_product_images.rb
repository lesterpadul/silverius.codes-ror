class CreateProductImages < ActiveRecord::Migration[6.1]
  def change
    create_table :product_images do |t|
      t.integer :admin_id
      t.integer :product_id
      t.string :content

      t.timestamps
    end
    add_index :product_images, :admin_id
    add_index :product_images, :product_id
  end
end
