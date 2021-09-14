require "test_helper"

class Admin::ImageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_image_index_url
    assert_response :success
  end
end
