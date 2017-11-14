module ApplicationHelper
	def get_site_meta
		if params[:id]
			@post = Post.friendly.find(params[:id])
			@image = @post.cover
			@title = @post.title
			@tags = @post.tag_list
			@desc = raw(excerpt(@post.body, '', radius: 100))
		end
	end

	def get_site_vars
		@firstLetter = ActsAsTaggableOn::Tag.all.order("name").group_by{|letter| letter.name[0]}
    	@tags = ActsAsTaggableOn::Tagging.limit(8).includes(:tag).where(context: 'tags').map { |tagging| tagging.tag.name  }.uniq
	end
end
