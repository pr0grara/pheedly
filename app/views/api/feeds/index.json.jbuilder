#json.extract! User.find_by(id:params[:id]), :id, :email

json.array!(@sources) do |source|  
  json.extract! source, :name, :code, :blurb
end

# json.array!(@feeds) do |feed|
#   json.extract! feed, :pheed_id, :source_id
# end

#perhaps add pheed_name and source_name to feed schema and just use those here ^^