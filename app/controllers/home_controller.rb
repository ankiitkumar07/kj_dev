class HomeController < ApplicationController
  def index
  	@page_title = 'Welcome Aboard'
  	@top_five_posts = Post.order("created_at DESC").limit(6)
  	@tag = ActsAsTaggableOn::Tag.find(1) 
  end
end
