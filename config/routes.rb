Rails.application.routes.draw do
  resources :feedbacks
  get 'legal/terms'

  get 'legal/privacy'

  get 'legal/license'

  get 'about', to: 'about_me#index', as: :about_me_index

  devise_for :users, :controllers => {:registrations => "user/registrations", :sessions => 'user/sessions', :passwords => 'user/passwords'}
  as :user do
  	get 'admin/:username', to: 'user/sessions#show', as: :username
    get 'admin', to: 'user/sessions#new'
    post '/admin', to: 'devise/sessions#create'
  end 
  resources :posts
  # get 'home/index'
  root to: 'home#index'
  #resources :tags, only: [:index, :show]
  get 'tags/:tag', to: 'posts#index', as: :tag

  get '/gallery', to: 'gallery#index'
  post '/photo/create', to: 'gallery#create', as: :new_photo
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
