class VideosController < ApplicationController
    include JwtAuthentication
    
    def index
        @videos = Video.all
        render json: @videos
    end

    def get
        VideoInfo.provider_api_keys = { youtube: 'AIzaSyC858T_lm7tr-HYAKfMBswChmYBGcc4IKA' }
        @video = VideoInfo.new('https://www.youtube.com/watch?v=mZqGqE0D0n4&ab_channel=CherryBloom')
        render json: { message: @video.description }
    end

    def create
        Rails.logger.info 12346666
        Rails.logger.info params[:link]
        VideoInfo.provider_api_keys = { youtube: 'AIzaSyC858T_lm7tr-HYAKfMBswChmYBGcc4IKA' }
        @youtube_video = VideoInfo.new(params[:link])

        Rails.logger.info 123466888
        Rails.logger.info @youtube_video.stats["viewCount"].to_i
        @video = Video.create(
            { 
                link: params[:link], 
                title: @youtube_video.title, 
                description: @youtube_video.description, 
                like_number: @youtube_video.stats["likeCount"].to_i, 
                dislike_number: 0, 
                user_id: 1 
            }
        )

        render json: @video
    end
end
