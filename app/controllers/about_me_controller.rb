class AboutMeController < ApplicationController
  def index
  	@posts = Post.all
  end
end
