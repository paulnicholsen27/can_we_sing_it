Song.destroy_all
Singer.destroy_all
Part.destroy_all

matt = Singer.find_or_create_by(name: "Matt Holland", active: true)
kswiss = Singer.find_or_create_by(name: "Kevin Sweitzer", active: true)
jay = Singer.find_or_create_by(name: "Jay Gilliam", active: true)
peter = Singer.find_or_create_by(name: "Peter Cheney", active: true)
kthom = Singer.find_or_create_by(name: "Kevin Thomason", active: true)
jeb = Singer.find_or_create_by(name: "Jeb Stenhouse", active: true)
cooper = Singer.find_or_create_by(name: "Cooper Westbrook", active: true)
abel = Singer.find_or_create_by(name: "Abel Jiminez", active: true)
pnic = Singer.find_or_create_by(name: "Paul Nicholsen", active: true)
pneg = Singer.find_or_create_by(name: "Paul Negron", active: true)
michael = Singer.find_or_create_by(name: "Michael Smith", active: true)
jonathan = Singer.find_or_create_by(name: "Jonathan Jones", active: true)
gibson = Singer.find_or_create_by(name: "Gibson Haynes", active: true)
mike = Singer.find_or_create_by(name: "Mike Allen", active: true)
jim = Singer.find_or_create_by(name: "Jim Gruschus", active: true)

crazy = Song.find_or_create_by(title: "Crazy Little Thing Called Love")
stop = Song.find_or_create_by(title: "Don't Stop Me Now", notes: "Upbeat")
faith = Song.find_or_create_by(title: "Faith")
under = Song.find_or_create_by(title: "Under Pressure")
take = Song.find_or_create_by(title: "Take On Me")

t1 = Part.find_or_create_by(song: take, name: "Tenor 1")
t2 = Part.find_or_create_by(song: take, name: "Tenor 2")
b1 = Part.find_or_create_by(song: take, name: "Baritone")
b2 = Part.find_or_create_by(song: take, name: "Bass")
vp = Part.find_or_create_by(song: take, name: "VP")
solo = Part.find_or_create_by(song: take, name: "Soloist")