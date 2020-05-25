class Gig < ApplicationRecord
    has_many :gig_songs
    has_many :songs, through: :gig_songs

    has_many :gig_singers
    has_many :singers, through: :gig_singers
end
