class AdminImagesController < AdminBaseController
    before_action :init
    def init
        @collapse_name = "settings";
        @page_name = "setting_images";
    end
    
    def index
    end
end
