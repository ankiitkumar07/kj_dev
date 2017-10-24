class User::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end
  def new
    super do |resource|
      @page_title = "Log In"
      @firstLetter = ActsAsTaggableOn::Tag.all.order("name").group_by{|letter| letter.name[0]}
      @tags = ActsAsTaggableOn::Tagging.limit(8).includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
    end
  end

  def show 
    @user = current_user
    @page_title = "Welcome " + @user.name
    @firstLetter = ActsAsTaggableOn::Tag.all.order("name").group_by{|letter| letter.name[0]}
    @tags = ActsAsTaggableOn::Tagging.limit(8).includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
