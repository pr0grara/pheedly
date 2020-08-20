class Api::PheedsController < ApplicationController
  def index
    @pheeds = Pheed.where(user_id: params[:user_id])
    # debugger
    if @pheeds.length > 0 
      render :index
    else
      render json: "not found"
    end
  end

  def create 
    user = User.find_by(id:params[:user_id])
    source = Source.find_by(name:params[:source])
    debugger
    feed = Feed.new({user_id:user.id, source_id:source.id})
    if feed.save
      debugger
      render :index
    else
      debugger
      render json: feed.errors.full_messages, status: 422
    end
  end
end
