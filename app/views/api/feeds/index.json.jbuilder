#json.extract! User.find_by(id:params[:id]), :id, :email

# json.array!(@sources) do |source|  
#   json.extract! source, :name, :code
# end

# json.array!(@feeds) do |feed|
#   json.extract! feed.pheed, :name  
#   json.extract! feed.source, :name, :code
#   json.extract! feed, :pheed_name, :pheed_id, :source_name, :source_id
# end

json.feeds(@feeds) do |feed|
  json.feed feed, :id, :source_id, :pheed_id
  json.source feed.source, :id, :name, :code
  json.pheed feed.pheed, :id, :name
end

#perhaps add pheed_name and source_name to feed schema and just use those here ^^