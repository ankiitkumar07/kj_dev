class CreateGalleries < ActiveRecord::Migration[5.0]
  def change
    create_table :galleries do |t|
      t.string :cover_path, unique: true
      t.string :description
      t.string :location

      t.timestamps
    end
  end
end
