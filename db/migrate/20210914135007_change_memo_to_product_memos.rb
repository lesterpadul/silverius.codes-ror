class ChangeMemoToProductMemos < ActiveRecord::Migration[6.1]
  def change
    rename_table :memos, :product_memos
  end
end
