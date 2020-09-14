#json.extract! User.find_by(id:params[:id]), :id, :email

json.array!(@pheeds) do |pheed|  
  # //debugger
  json.extract! pheed, :name
end
