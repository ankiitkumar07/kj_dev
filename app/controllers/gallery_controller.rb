class GalleryController < ApplicationController
	before_action :set_photo, only: [:new, :edit, :update, :destroy]

	def index
		@photos = Gallery.all
	end

	def new
	end

	def create
		@photo.new(photo_params)
		respond_to do |format|
			if @photo.save!
				format.html { redirect_to :index, notice: 'Photo was successfully added.'  }
				format.json { render :index, status: :created, location: @photo }
			else
				format.html { redirect_to :new }
				format.json { render json: @photo.errors, status: :unprocessable_entity }
			end
		end
	end

	def edit		
	end

	def update		
	end

	def destroy
		@photo.destroy
		respond_to do |format|
	      format.html { redirect_to photos_url, notice: 'Photo was successfully removed.' }
	      format.json { head :no_content }
	    end
	end

	private
	def set_photo
		@photo = Gallery.find(params[:id])
	end

	def photo_params
		params.require(:gallery).permit(:cover_path, :description, :location)
	end
end
