require 'test_helper'

class SingerPartsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @singer_part = singer_parts(:one)
  end

  test "should get index" do
    get singer_parts_url, as: :json
    assert_response :success
  end

  test "should create singer_part" do
    assert_difference('SingerPart.count') do
      post singer_parts_url, params: { singer_part: { part_id: @singer_part.part_id, singer_id: @singer_part.singer_id } }, as: :json
    end

    assert_response 201
  end

  test "should show singer_part" do
    get singer_part_url(@singer_part), as: :json
    assert_response :success
  end

  test "should update singer_part" do
    patch singer_part_url(@singer_part), params: { singer_part: { part_id: @singer_part.part_id, singer_id: @singer_part.singer_id } }, as: :json
    assert_response 200
  end

  test "should destroy singer_part" do
    assert_difference('SingerPart.count', -1) do
      delete singer_part_url(@singer_part), as: :json
    end

    assert_response 204
  end
end
