require 'test_helper'

class GigSingersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gig_singer = gig_singers(:one)
  end

  test "should get index" do
    get gig_singers_url, as: :json
    assert_response :success
  end

  test "should create gig_singer" do
    assert_difference('GigSinger.count') do
      post gig_singers_url, params: { gig_singer: { gig_id: @gig_singer.gig_id, singer_id: @gig_singer.singer_id } }, as: :json
    end

    assert_response 201
  end

  test "should show gig_singer" do
    get gig_singer_url(@gig_singer), as: :json
    assert_response :success
  end

  test "should update gig_singer" do
    patch gig_singer_url(@gig_singer), params: { gig_singer: { gig_id: @gig_singer.gig_id, singer_id: @gig_singer.singer_id } }, as: :json
    assert_response 200
  end

  test "should destroy gig_singer" do
    assert_difference('GigSinger.count', -1) do
      delete gig_singer_url(@gig_singer), as: :json
    end

    assert_response 204
  end
end
