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

#users
demoUser = User.create(email:"demo user", password:'123456')
lina = User.create(email:"lina@aa.io", password:"123456")

#sources
nbc = Source.create(name:"nbc", code:"nbcnews.com")
engadget = Source.create(name:"engadget", code:"engadget.com")
gizmodo = Source.create(name:"gizmodo", code: "gizmodo.com")
verge = Source.create(name:"the verge", code:"theverge.com")
techcrunch = Source.create(name:"techcrunch", code:"techcrunch.com")
wired = Source.create(name:"wired", code:"wired.com")
mashable = Source.create(name:"mashable", code:"mashable.com")
vice = Source.create(name:"vice", code:"vice.com")
harv_biz_rev = Source.create(name:"harvard business review", code:"hbr.org")
biz_insider = Source.create(name:"business insider", code:"businessinsider.com")
economist = Source.create(name:"the economist", code:"economist.com")
time = Source.create(name:"time", code:"time.com")
forbes = Source.create(name:"forbes", code:"forbes.com")
bloomberg = Source.create(name:"bloomberg", code:"bloomberg.com")
new_yorker = Source.create(name:"the new yorker", code:"newyorker.com")
slate = Source.create(name:"slate", code:"slate.com")
buzzfeed = Source.create(name:"buzzfeed", code:"buzzfeed.com")
kotaku = Source.create(name:"kotaku", code:"kotaku.com")
polygon = Source.create(name:"polygon", code:"polygon.com")

#feeds
feed1 = Feed.create(source_id:vice.id , user_id:demoUser.id)
feed2 = Feed.create(source_id:forbes.id, user_id: demoUser.id)
feed3 = Feed.create(source_id:engadget.id, user_id: demoUser.id)
feed4 = Feed.create(source_id:gizmodo.id, user_id: demoUser.id)
feed5 = Feed.create(source_id:polygon.id , user_id:demoUser.id)

