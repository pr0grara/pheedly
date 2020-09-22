class Api::SourcesController < ApplicationController
  def index
    @sources = Source.where("name LIKE ?", '%' + params[:query] + '%') #using this for smart search
  end

end