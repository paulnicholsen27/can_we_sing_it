class GigSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :songs, :attendance, :start_time
end
