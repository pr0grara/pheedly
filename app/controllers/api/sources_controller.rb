class Api::SourcesController < ApplicationController
  def index
    @sources = Source.where("name LIKE ?", '%' + params[:query] + '%')
    # debugger
    puts 'hello'
  end

end