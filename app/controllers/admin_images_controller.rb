class AdminImagesController < AdminBaseController
    before_action :init
    def init
        @collapse_name = "settings";
        @page_name = "setting_images";
    end
    
    def index
        abort 111
    end

    def show
        abort 222
    end
end
