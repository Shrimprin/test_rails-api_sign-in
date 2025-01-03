Rails.application.routes.draw do
  namespace :api do
    get "health_check", to: "health_check#index"
    mount_devise_token_auth_for "User", at: "auth"
    namespace :current do
      resource :user, only: [:show]
    end
  end
end
