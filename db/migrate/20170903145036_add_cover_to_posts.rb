class AddCoverToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :cover, :string
  end
end
