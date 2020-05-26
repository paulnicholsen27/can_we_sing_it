class GigSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :songs, :singers
end
