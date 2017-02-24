class Note < ApplicationRecord
  belongs_to :user

  # scope :by_user, -> (id) { includes(:user).where("users.id": id).references(:user) if id.present? }
  scope :by_type, -> (type) { where(note_type: type) if type.present? }
end
