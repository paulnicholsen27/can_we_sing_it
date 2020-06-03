class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :notes, :active, :is_holiday, :parts
end
