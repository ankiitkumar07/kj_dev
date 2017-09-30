class AboutMeController < ApplicationController
  def index
  	@tags = ActsAsTaggableOn::Tagging.limit(8).includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  end
end
