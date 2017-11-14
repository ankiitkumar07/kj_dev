class AboutMeController < ApplicationController
  def index
  	@page_title = "About the Author"
  end

  def gallery
  	@page_title = "My Travel Gallery"
  end
end
