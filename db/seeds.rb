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
silent = Song.find_or_create_by(title: "Silent Night", holiday: true)
carol = Song.find_or_create_by(title: "Carol of the Bells", holiday: true)

t1 = Part.find_or_create_by(song: take, name: "Tenor 1")
t2 = Part.find_or_create_by(song: take, name: "Tenor 2")
b1 = Part.find_or_create_by(song: take, name: "Baritone")
b2 = Part.find_or_create_by(song: take, name: "Bass")
vp = Part.find_or_create_by(song: take, name: "VP")
solo = Part.find_or_create_by(song: take, name: "Soloist")

take_t1 = Part.find_or_create_by(song: take, name: "Tenor 1")
take_t2 = Part.find_or_create_by(song: take, name: "Tenor 2")
take_b1 = Part.find_or_create_by(song: take, name: "Baritone")
take_b2 = Part.find_or_create_by(song: take, name: "Bass")
take_vp = Part.find_or_create_by(song: take, name: "VP")
take_solo = Part.find_or_create_by(song: take, name: "Soloist", 
                              solo: true, bonus: true)



silent_t1 = Part.find_or_create_by(song: silent, name: "Tenor 1")
silent_t2 = Part.find_or_create_by(song: silent, name: "Tenor 2")
silent_t3 = Part.find_or_create_by(song: silent, name: "Tenor 3")
silent_b1 = Part.find_or_create_by(song: silent, name: "Baritone")
silent_b2 = Part.find_or_create_by(song: silent, name: "Bass")
silent_solo = Part.find_or_create_by(song: silent, name: "Soloist", 
                              solo: true)

silent_solo.singers << kthom
silent_t1.singers += [kswiss, jay]
silent_t2.singers += [matt, peter]
silent_t3.singers += [jeb, cooper, abel]
silent_b1.singers += [pnic, pneg, michael]
silent_b2.singers += [gibson, jonathan, jim, mike]

take_solo.singers << pneg
take_t1.singers += [kswiss, jay, kthom, matt]
take_t2.singers += [cooper, peter, jeb, abel]
take_vp.singers << pnic
take_b1.singers += [pneg, michael]
take_b2.singers += [gibson, jonathan, jim, mike]

jb = Gig.find_or_create_by(name: "Joe Biden's Christmas Party")
sc = Gig.find_or_create_by(name: "Supreme Court")

jb.singers += Singer.all 
sc.singers = Singer.all[1..12]