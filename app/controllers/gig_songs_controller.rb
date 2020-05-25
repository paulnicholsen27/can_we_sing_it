class GigSongsController < ApplicationController
  before_action :set_gig_song, only: [:show, :update, :destroy]

  # GET /gig_songs
  def index
    @gig_songs = GigSong.all

    render json: @gig_songs
  end

  # GET /gig_songs/1
  def show
    render json: @gig_song
  end

  # POST /gig_songs
  def create
    @gig_song = GigSong.new(gig_song_params)

    if @gig_song.save
      render json: @gig_song, status: :created, location: @gig_song
    else
      render json: @gig_song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gig_songs/1
  def update
    if @gig_song.update(gig_song_params)
      render json: @gig_song
    else
      render json: @gig_song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gig_songs/1
  def destroy
    @gig_song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gig_song
      @gig_song = GigSong.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def gig_song_params
      params.require(:gig_song).permit(:gig_id, :song_id)
    end
end
