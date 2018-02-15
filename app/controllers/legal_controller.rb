class LegalController < ApplicationController
  def terms
  	@page_title = "Terms Of Services"
  end

  def privacy
  	@page_title = "Privacy Policies"
  end

  def license
  	@page_title = "License"
  end
end
