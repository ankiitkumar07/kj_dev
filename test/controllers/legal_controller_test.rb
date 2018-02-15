require 'test_helper'

class LegalControllerTest < ActionDispatch::IntegrationTest
  test "should get terms" do
    get legal_terms_url
    assert_response :success
  end

  test "should get privacy" do
    get legal_privacy_url
    assert_response :success
  end

  test "should get license" do
    get legal_license_url
    assert_response :success
  end

end
