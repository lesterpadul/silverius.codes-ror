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

    def detail
        @product = Product.find(params[:id])
    end

    def create
        # if id is not present
        if params[:product][:id].empty?
            params[:product].delete("id")
            @product = Product.new(product_create_params)

        # else id is present
        else 
            @product = Product.find(params[:product][:id])
            @product.title = params[:product][:title]
            @product.content = params[:product][:content]
        end

        # save content
        if @product.save
            respond_to do |format|
                format.json { render json: {
                        "product" => @product
                    }
                }
            end
        else
            respond_to do |format|
                format.json { render json: {
                        "product" => @product
                    }
                }
            end
        end
    end

    def info
        @current_product = Product
            .where("id = ?", params[:product_id])
            .limit(1)
        respond_to do |format|
            format.json { render json: {
                "product" => @current_product
              }
            }
        end
    end

    def product_create_params
        params.require(:product).permit(:title, :content, :id)
    end
end
