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
Pheed.destroy_all

#users
demoUser = User.create(email:"demo user", password:'123456')
lina = User.create(email:"lina@aa.io", password:"123456")

#sources
nbc = Source.create(name:"nbc", code:"nbcnews.com", blurb: 'The National Broadcasting Company is an American English-language commercial terrestrial radio and television network owned by NBCUniversal, a subsidiary of Comcast.')
engadget = Source.create(name:"engadget", code:"engadget.com", blurb: 'Engadget is a technology blog network with daily coverage of gadgets and consumer electronics.')
gizmodo = Source.create(name:"gizmodo", code: "gizmodo.com", blurb: 'Gizmodo is a design, technology, science and science fiction website.')
verge = Source.create(name:"the verge", code:"theverge.com", blurb: 'The Verge is an American technology news website operated by Vox Media, publishing news, feature stories, guidebooks, product reviews, and podcasts.')
techcrunch = Source.create(name:"techcrunch", code:"techcrunch.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
wired = Source.create(name:"wired", code:"wired.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in headlorem ipsit yada yada plada plada this is just randomized words as they pop in headlorem ipsit yada yada plada plada this is just randomized words as they pop in head')
mashable = Source.create(name:"mashable", code:"mashable.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in headlorem ipsit yada yada plada plada this is just randomized words as they pop in head')
vice = Source.create(name:"vice", code:"vice.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
harv_biz_rev = Source.create(name:"harvard business review", code:"hbr.org", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
biz_insider = Source.create(name:"business insider", code:"businessinsider.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
economist = Source.create(name:"the economist", code:"economist.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
time = Source.create(name:"time", code:"time.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
forbes = Source.create(name:"forbes", code:"forbes.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
bloomberg = Source.create(name:"bloomberg", code:"bloomberg.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
new_yorker = Source.create(name:"the new yorker", code:"newyorker.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
slate = Source.create(name:"slate", code:"slate.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
buzzfeed = Source.create(name:"buzzfeed", code:"buzzfeed.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
kotaku = Source.create(name:"kotaku", code:"kotaku.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')
polygon = Source.create(name:"polygon", code:"polygon.com", blurb: 'lorem ipsit yada yada plada plada this is just randomized words as they pop in head')

#pheeds
finance = Pheed.create(user_id:demoUser.id, name: "finance")
technology = Pheed.create(user_id:demoUser.id, name: "tech")
fun = Pheed.create(user_id:demoUser.id, name: "fun")
culture = Pheed.create(user_id:demoUser.id, name: "culture")

#feeds
feed1 = Feed.create(source_id:vice.id, user_id:demoUser.id, pheed_id: culture.id)
feed2 = Feed.create(source_id:forbes.id, user_id: demoUser.id, pheed_id: finance.id)
feed3 = Feed.create(source_id:engadget.id, user_id: demoUser.id, pheed_id: technology.id)
feed4 = Feed.create(source_id:gizmodo.id, user_id: demoUser.id, pheed_id: culture.id)
feed5 = Feed.create(source_id:polygon.id, user_id:demoUser.id, pheed_id: fun.id)

