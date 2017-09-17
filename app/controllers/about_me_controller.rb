class AboutMeController < ApplicationController
  def index
  	@tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  end
end
