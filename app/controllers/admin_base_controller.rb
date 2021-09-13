class AdminBaseController < ApplicationController
    layout "admin"
    before_action :authenticate_user!
    @page_name = "Admin"
    @collapse_name = "";
end
