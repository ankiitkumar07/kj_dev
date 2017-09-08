class Post < ApplicationRecord
	belongs_to :user
	extend FriendlyId
  friendly_id :title, use: :slugged

  acts_as_taggable_on :tags
end
