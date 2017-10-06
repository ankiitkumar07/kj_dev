class AboutMeController < ApplicationController
  def index
  	@tags = ActsAsTaggableOn::Tagging.limit(8).includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  	@firstLetter = ActsAsTaggableOn::Tag.all.order("name").group_by{|letter| letter.name[0]}
  	
  end
end
