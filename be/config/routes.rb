Rails.application.routes.draw do
    get 'api/videos', to: 'videos#index'
end