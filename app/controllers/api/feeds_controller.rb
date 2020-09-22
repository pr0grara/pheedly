class Api::FeedsController < ApplicationController
  def index
    @feeds = Feed.where(user_id: params[:user_id])
  end

  def create 
    user = User.find_by(id:params[:user_id])
    source = Source.find_by(name:params[:source])
    pheed = Pheed.find_by(name:params[:pheed])
    feed = Feed.new({user_id:user.id, source_id:source.id, pheed_id:pheed.id})
    if feed.save
      render :index
    else
      render json: feed.errors.full_messages, status: 422
    end
  end
end
