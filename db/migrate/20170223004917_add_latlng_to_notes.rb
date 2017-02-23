class AddLatlngToNotes < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :lat, :string
    add_column :notes, :lng, :string
  end
end
