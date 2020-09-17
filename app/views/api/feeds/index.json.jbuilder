#json.extract! User.find_by(id:params[:id]), :id, :email

json.array!(@sources) do |source|  
  json.extract! source, :name, :code, :blurb
end
