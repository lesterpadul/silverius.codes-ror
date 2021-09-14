class AdminProductsController < AdminBaseController
    before_action :init
    def init
        @collapse_name = "settings";
        @page_name = "setting_products";
    end
    
    def index
        @params = params
        @products = Product
        .where("title like ?", "%#{params[:title]}%")
            .order(id: :desc)
            .paginate(
                page: params[:page], 
                per_page: 10
            )
    end

    def create
        @product = Product.new(product_create_params)
        @product.save
        respond_to do |format|
            format.json { render json: {
                "product" => @product
              }
            }
        end
    end

    def product_create_params
        params.require(:product).permit(:title, :content, :id)
    end
end
