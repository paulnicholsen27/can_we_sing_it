class GigSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :songs, :singers, :start_time
end
