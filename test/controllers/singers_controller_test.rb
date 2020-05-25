require 'test_helper'

class SingersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @singer = singers(:one)
  end

  test "should get index" do
    get singers_url, as: :json
    assert_response :success
  end

  test "should create singer" do
    assert_difference('Singer.count') do
      post singers_url, params: { singer: { active: @singer.active, name: @singer.name } }, as: :json
    end

    assert_response 201
  end

  test "should show singer" do
    get singer_url(@singer), as: :json
    assert_response :success
  end

  test "should update singer" do
    patch singer_url(@singer), params: { singer: { active: @singer.active, name: @singer.name } }, as: :json
    assert_response 200
  end

  test "should destroy singer" do
    assert_difference('Singer.count', -1) do
      delete singer_url(@singer), as: :json
    end

    assert_response 204
  end
end
