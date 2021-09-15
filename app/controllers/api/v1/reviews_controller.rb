class Api::V1::ReviewsController < ApplicationController
    protect_from_forgery with: :null_session
    def index
        reviews = Review.all.order(:id => :desc)
        render json: ReviewSerializer.new(reviews).serialized_json
    end

    def show
        review = Review.find_by(airline_id: params[:id])
        render json: ReviewSerializer.new(review).serialized_json
    end

    def create
        review = Review.new(review_params)

        if review.save
            render json: ReviewSerializer.new(review).serialized_json
        else
            render json: {error: review.errors.messages}, status: 422
        end
    end

    def update
        review = Review.find_by(slug: params[:id])

        if review.update(review_params)
            render json: ReviewSerializer.new(review).serialized_json
        else
            render json: {error: review.errors.messages}, status: 422
        end
    end

    def destroy
        review = Review.find_by(slug: params[:id])

        if review.destroy
            render json: {error: ""}
        else
            render json: {error: review.errors.messages}, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
    end
end