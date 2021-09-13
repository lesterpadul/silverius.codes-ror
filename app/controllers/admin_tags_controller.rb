class AdminTagsController < AdminBaseController
  before_action :init
  def init
    @collapse_name = "settings";
    @page_name = "setting_tags";
  end
  
  def index
  end
end
