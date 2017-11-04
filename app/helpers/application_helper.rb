module ApplicationHelper
	def get_site_meta
		if params[:id]
			@post = Post.friendly.find(params[:id])
			@image = @post.cover
			@title = @post.title
			@tags = @post.tag_list
			@desc = raw(excerpt(@post.body, ' ', radius: 100))
		end
	end
end
