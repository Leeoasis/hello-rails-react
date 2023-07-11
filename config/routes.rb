Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index], defaults: { format: 'json' } do
        collection do
          get :random
        end
      end
    end
  end
end
