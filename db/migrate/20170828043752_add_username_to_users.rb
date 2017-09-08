class AddUsernameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :username, :string, unique: true, null: false, default: ""
  end
end
