Rails.application.routes.draw do
  get 'airlines/index'
  devise_for :users

  # front page
  root :to => 'home#index'
  get 'home/index'
  get 'portfolio', :to => "portfolio#index"
  
  get '/admin', :to => "admin#index"
  get '/admin/blogs', :to => "admin_blog#index"
  get '/admin/images', :to => "admin_images#index"
  get '/admin/tags', :to => "admin_tags#index"
  get '/admin/users', :to => "admin_users#index"
  get '/admin/products', :to => "admin_products#index"
  get '/admin/products/:id', :to => "admin_products#detail"
  post '/admin/product_create', :to => "admin_products#create"
  post '/admin/product_info', :to => "admin_products#info"
  get 'admin_users/index'
  get 'admin_tags/index'
  
  # airlines page
  get '/airlines', :to => 'airlines#index'
  get '/airlines/:slug', :to => 'airlines#show'

  # name space for api
  namespace :api do
    namespace :v1 do
      resources :airlines, params: :slug
      resources :reviews
    end
  end
  
  # redirect to home index any stray requests not declared in the route
  get '*path', to: 'home#index', via: :all
end
