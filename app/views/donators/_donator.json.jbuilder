json.extract! donator, :id, :amount, :user_id, :product_id, :created_at, :updated_at
json.url donator_url(donator, format: :json)
