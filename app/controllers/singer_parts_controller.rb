class SingerPartsController < ApplicationController
  before_action :set_singer_part, only: [:show, :update, :destroy]

  # GET /singer_parts
  def index
    @singer_parts = SingerPart.all

    render json: @singer_parts
  end

  # GET /singer_parts/1
  def show
    render json: @singer_part
  end

  # POST /singer_parts
  def create
    @singer_part = SingerPart.new(singer_part_params)

    if @singer_part.save
      render json: @singer_part, status: :created, location: @singer_part
    else
      render json: @singer_part.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /singer_parts/1
  def update
    if @singer_part.update(singer_part_params)
      render json: @singer_part
    else
      render json: @singer_part.errors, status: :unprocessable_entity
    end
  end

  # DELETE /singer_parts/1
  def destroy
    @singer_part.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_singer_part
      @singer_part = SingerPart.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def singer_part_params
      params.require(:singer_part).permit(:singer_id, :part_id)
    end
end
