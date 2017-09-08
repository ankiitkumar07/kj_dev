class HomeController < ApplicationController
  def index
  	@page_title = 'Welcome Aboard'
  	@posts = Post.all
  	@posts = Post.order("created_at DESC").limit(3)
  	@tags = ActsAsTaggableOn::Tag.all
  end
end
