class AdminProductsController < AdminBaseController
    before_action :init
    def init
        @collapse_name = "settings";
        @page_name = "setting_products";
    end

    def index
    end
end
