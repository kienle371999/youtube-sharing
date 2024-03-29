# app/controllers/concerns/jwt_authentication.rb

module JwtAuthentication
    extend ActiveSupport::Concern
  
    included do
      before_action :authorize_request
    end
  
    def generate_token(user_id)
      JWT.encode(({ user_id: user_id }), 'yourSecret')
    end
  
    def decode_token(token)
      decoded_token = JWT.decode(token, 'yourSecret')
      decoded_token.first
    rescue JWT::DecodeError
      nil
    end
  
    def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header
      begin
        @decoded = decode_token(header)

        Rails.logger.info 12346688877777
        Rails.logger.info @decoded
        @current_user = User.find(@decoded["user_id"].to_i)
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    end
  end
  