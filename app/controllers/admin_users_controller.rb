class AdminUsersController < AdminBaseController
  before_action :init
  def init
    @collapse_name = "settings";
    @page_name = "setting_users";
  end
  
  def index
  end
end
