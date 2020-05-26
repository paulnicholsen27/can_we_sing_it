class PartSerializer < ActiveModel::Serializer
  attributes :id, :song, :name, :bonus, :singers
end
