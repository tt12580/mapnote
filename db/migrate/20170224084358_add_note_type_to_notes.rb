class AddNoteTypeToNotes < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :note_type, :string
  end
end
