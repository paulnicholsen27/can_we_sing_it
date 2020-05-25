require 'test_helper'

class GigSongsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gig_song = gig_songs(:one)
  end

  test "should get index" do
    get gig_songs_url, as: :json
    assert_response :success
  end

  test "should create gig_song" do
    assert_difference('GigSong.count') do
      post gig_songs_url, params: { gig_song: { gig_id: @gig_song.gig_id, song_id: @gig_song.song_id } }, as: :json
    end

    assert_response 201
  end

  test "should show gig_song" do
    get gig_song_url(@gig_song), as: :json
    assert_response :success
  end

  test "should update gig_song" do
    patch gig_song_url(@gig_song), params: { gig_song: { gig_id: @gig_song.gig_id, song_id: @gig_song.song_id } }, as: :json
    assert_response 200
  end

  test "should destroy gig_song" do
    assert_difference('GigSong.count', -1) do
      delete gig_song_url(@gig_song), as: :json
    end

    assert_response 204
  end
end
