class CreateFeedbacks < ActiveRecord::Migration[5.0]
  def change
    create_table :feedbacks do |t|
      t.string :name
      t.string :email
      t.text :message
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
