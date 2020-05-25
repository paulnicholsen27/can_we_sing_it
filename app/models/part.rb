class Part < ApplicationRecord
    belongs_to :song
    has_many :singer_parts
    has_many :singers, through: :singer_parts
end
