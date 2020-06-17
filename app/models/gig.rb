class Gig < ApplicationRecord
    has_many :gig_songs
    has_many :songs, through: :gig_songs

    has_many :gig_singers
    has_many :singers, through: :gig_singers

    def singers
        Singer.active_singers.map {|singer| {singer: singer, included: singer.gigs.include?(self)}}
    end

    def songs
        set_list = self.gig_songs.map {|gs| gs.song}
        Song.all.map {|song| {song: song, included: set_list.include?(song)}}
    end
end
