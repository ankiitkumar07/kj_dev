class HomeController < ApplicationController
  def index
  	@page_title = 'Welcome Aboard'
  	@tags = ActsAsTaggableOn::Tagging.limit(8).includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  	@posts = Post.order("created_at DESC").limit(3)
  end
end
