class Song < ApplicationRecord
    has_many :parts 
    has_many :gig_songs
    has_many :gigs, through: :gig_songs

    def self.year_round
        # omits holiday songs
        Song.where(is_holiday: false)
    end
end
