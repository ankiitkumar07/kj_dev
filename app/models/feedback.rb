class Feedback < ApplicationRecord
	enum status: [:unread, :read, :replied]
end
