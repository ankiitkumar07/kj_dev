class User::PasswordsController < Devise::PasswordsController
  # GET /resource/password/new
  # def new
  #   super
  # end

  # POST /resource/password
  # def create
  #   super
  # end

  # GET /resource/password/edit?reset_password_token=abcdef
  # def edit
  #   super
  # end

  # def new
  #   super
  #   @page_title = "Forgot Password"
  #   @tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  # end

  # def edit
  #   super
  #   @page_title = "Edit Password"
  #   @tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  # end

  # def create
  #   @tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  # end

  # PUT /resource/password
  # def update
  #   super
  # end

  # protected

  # def after_resetting_password_path_for(resource)
  #   super(resource)
  # end

  # The path used after sending reset password instructions
  # def after_sending_reset_password_instructions_path_for(resource_name)
  #   super(resource_name)
  # end
end
