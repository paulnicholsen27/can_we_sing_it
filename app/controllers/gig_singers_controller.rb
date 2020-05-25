class GigSingersController < ApplicationController
  before_action :set_gig_singer, only: [:show, :update, :destroy]

  # GET /gig_singers
  def index
    @gig_singers = GigSinger.all

    render json: @gig_singers
  end

  # GET /gig_singers/1
  def show
    render json: @gig_singer
  end

  # POST /gig_singers
  def create
    @gig_singer = GigSinger.new(gig_singer_params)

    if @gig_singer.save
      render json: @gig_singer, status: :created, location: @gig_singer
    else
      render json: @gig_singer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gig_singers/1
  def update
    if @gig_singer.update(gig_singer_params)
      render json: @gig_singer
    else
      render json: @gig_singer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gig_singers/1
  def destroy
    @gig_singer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gig_singer
      @gig_singer = GigSinger.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def gig_singer_params
      params.require(:gig_singer).permit(:gig_id, :singer_id)
    end
end
