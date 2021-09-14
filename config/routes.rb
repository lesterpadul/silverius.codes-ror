Rails.application.routes.draw do
  resources :donators
  get 'admin_users/index'
  get 'admin_tags/index'
  devise_for :users
  root 'home#index'
  get 'home/index'
  get 'portfolio', :to => "portfolio#index"
  get 'admin', :to => "admin#index"
  get 'admin/blogs', :to => "admin_blog#index"
  get 'admin/images', :to => "admin_images#index"
  get 'admin/tags', :to => "admin_tags#index"
  get 'admin/users', :to => "admin_users#index"

  # product page
  get 'admin/products', :to => "admin_products#index"
  post "admin/product_create", :to => "admin_products#create"
end
