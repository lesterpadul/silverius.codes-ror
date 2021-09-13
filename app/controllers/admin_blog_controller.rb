class AdminBlogController < AdminBaseController
    before_action :init
    def init
        @page_name = "blog";
    end

    def index
    end
end
