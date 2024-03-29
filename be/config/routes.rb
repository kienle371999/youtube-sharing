Rails.application.routes.draw do
    post "/login", to: "users#login"

    get 'api/videos', to: 'videos#index'
    post 'api/videos', to: 'videos#create'

    post 'api/user/login', to: 'users#login'
end