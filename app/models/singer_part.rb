class SingerPart < ApplicationRecord
    belongs_to :part 
    belongs_to :singer
end
