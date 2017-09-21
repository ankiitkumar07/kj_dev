class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]


  # GET /posts
  # GET /posts.json
  def index
    @page_title = "Posts"
      if params[:tag]
        @posts = Post.order(created_at: :desc).tagged_with(params[:tag]).paginate(:page => params[:page], :per_page => 3)
        @tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
      else
        @posts = Post.order(created_at: :desc).paginate(:page => params[:page], :per_page => 3)
        @tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
      end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.friendly.find(params[:id])
    @page_title = @post.title
    @sidebar_posts = Post.where.not(id: @post.id).order("Random()").limit(4)
    @tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
  end

  # GET /posts/new
  def new
    @tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
    @post = current_user.posts.build
    @page_title = "Create A New Post"
  end

  # GET /posts/1/edit
  def edit
    @tags = ActsAsTaggableOn::Tagging.includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
    @page_title = "Edit Post"
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = current_user.posts.build(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.friendly.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :body, :cover, :tag_list)
    end
end
