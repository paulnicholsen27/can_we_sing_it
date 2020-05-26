class SingerSerializer < ActiveModel::Serializer
  attributes :id, :name, :active, :parts, :gigs
end
