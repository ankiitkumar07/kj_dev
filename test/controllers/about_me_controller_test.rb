require 'test_helper'

class AboutMeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get about_me_index_url
    assert_response :success
  end

end
