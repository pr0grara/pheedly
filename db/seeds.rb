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


demoUser = User.create(email:"demo user", password:'123456')
lina = User.create(email:"lina@aa.io", password:"123456")
nbc = Source.create(name: "nbc", code: "nbc2-news")
natgeo = Source.create(name:"National Geographic", code: "national-geographic-channel-www-natgeotv-com")
engadget = Source.create(name: "engadget", code: "engadget")
gizmodo = Source.create(name: "gizmodo", code: "gizmodo")
# feed1 = Feed.create(source_id:n atgeo.id, user_id: demoUser.id)
feed2 = Feed.create(source_id:nbc.id, user_id: demoUser.id)
feed3 = Feed.create(source_id:engadget.id, user_id: demoUser.id)
feed4 = Feed.create(source_id:gizmodo.id, user_id: demoUser.id)

