#json.extract! User.find_by(id:params[:id]), :id, :email
require 'byebug'

# debugger
json.array!(@sources) do |source|  
  json.extract! source, :name, :code
end
