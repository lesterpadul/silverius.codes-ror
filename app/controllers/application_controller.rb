class ApplicationController < ActionController::Base
    layout :layout_by_resource
    
    def layout_by_resource
        if devise_controller?
            "devise"
        else
            "application"
        end
    end

    def after_sign_in_path_for(resource)
        stored_location_for(resource) || admin_path
    end

    def after_sign_out_path_for(resource)
        session[:previous_url] || admin_path
    end

    protected
    def after_update_path_for(resource)
        abort 111
        flash[:notice] = "Account succesfully updated"
        edit_user_registration_path
    end
end
