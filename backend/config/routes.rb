Rails.application.routes.draw do
  namespace :api do
    get "health_check", to: "health_check#index"
  end
end
