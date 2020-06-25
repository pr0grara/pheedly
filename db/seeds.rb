# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Source.destroy_all
Feed.destroy_all


lina = User.create(email:"lina@aa.io", password:"123456")
source1 = Source.create(name:"National Geographic")
feed1 = Feed.create(source_id:source1.id, user_id: lina.id)

