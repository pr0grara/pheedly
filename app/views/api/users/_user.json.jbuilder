#json.extract! User.find_by(id:params[:id]), :id, :email
#debugger
json.extract! user, :id, :email
