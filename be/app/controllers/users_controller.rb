class UsersController < ApplicationController
    def login
        @user = User.find_by(email: params[:email])

        if @user && @user.authenticate(params[:password])
            token = JWT.encode(({ user_id: @user.id }), 'yourSecret')
            render json: { user: @user, token: token }
        else
            render json: { error: "Invalid email or password" }
        end
    end
end
