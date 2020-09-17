json.array!(@sources) do |source|  
  json.extract! source, :name, :code, :blurb
end