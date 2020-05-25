class Singer < ApplicationRecord
    has_many :singer_parts 
    has_many :parts, through: :singer_parts

    has_many :gig_singers
    has_many :gigs, through: :gig_singers
end
