Rails.application.routes.draw do
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :tasks
    end
  end
end
