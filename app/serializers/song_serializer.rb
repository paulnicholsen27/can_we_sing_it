class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :notes, :active, :holiday, :parts, :gigs
end
