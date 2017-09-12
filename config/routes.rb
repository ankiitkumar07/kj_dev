Rails.application.routes.draw do
  get 'about_me/index'

  devise_for :users, :controllers => {:registrations => "user/registrations", :sessions => 'user/sessions'}
  resources :posts
  # get 'home/index'
  root to: 'home#index'
  #resources :tags, only: [:index, :show]
  get 'tags/:tag', to: 'posts#index', as: :tag

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
