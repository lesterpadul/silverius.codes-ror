class Add < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :title, :string
    add_column :products, :content, :string
  end
end
