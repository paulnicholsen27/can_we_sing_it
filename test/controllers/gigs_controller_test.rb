require 'test_helper'

class GigsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gig = gigs(:one)
  end

  test "should get index" do
    get gigs_url, as: :json
    assert_response :success
  end

  test "should create gig" do
    assert_difference('Gig.count') do
      post gigs_url, params: { gig: { name: @gig.name, notes: @gig.notes, start_time: @gig.start_time } }, as: :json
    end

    assert_response 201
  end

  test "should show gig" do
    get gig_url(@gig), as: :json
    assert_response :success
  end

  test "should update gig" do
    patch gig_url(@gig), params: { gig: { name: @gig.name, notes: @gig.notes, start_time: @gig.start_time } }, as: :json
    assert_response 200
  end

  test "should destroy gig" do
    assert_difference('Gig.count', -1) do
      delete gig_url(@gig), as: :json
    end

    assert_response 204
  end
end
