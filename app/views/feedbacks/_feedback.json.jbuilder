json.extract! feedback, :id, :name, :email, :message, :read_status, :reply_status, :created_at, :updated_at
json.url feedback_url(feedback, format: :json)
