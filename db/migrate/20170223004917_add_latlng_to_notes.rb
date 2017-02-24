class AddLatlngToNotes < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :latlng, :string
  end
end
