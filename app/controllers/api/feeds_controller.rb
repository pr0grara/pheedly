class Api::FeedsController < ApplicationController
  def index
    @feeds = Feed.where(user_id: params[:user_id])
    @sources = []
    @feeds.each do |feed|
      @sources.push(feed.source)
    end
    if @sources.length > 0 
      render :index
    else
      render json: "not found"
    end
  end
end
